import { useRef, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { FORMSPREE_ENDPOINT } from "../data/portfolio.js";

const EMPTY_FORM = { name: "", email: "", subject: "", message: "", _gotcha: "" };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function ContactForm({ t }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  // idle | sending | sent | error | network
  const [status, setStatus] = useState("idle");
  // Technical detail returned by Formspree when a submission is refused (shown to help debugging).
  const [errorDetail, setErrorDetail] = useState("");
  // Blocks double submissions even if the button is clicked twice very quickly.
  const submitting = useRef(false);

  const update = field => e => {
    setForm(current => ({ ...current, [field]: e.target.value }));
    if (errors[field]) setErrors(current => ({ ...current, [field]: undefined }));
    if (status === "sent" || status === "error" || status === "network") setStatus("idle");
  };

  function validate() {
    const found = {};
    if (!form.name.trim()) found.name = t.errRequired;
    if (!form.email.trim()) found.email = t.errRequired;
    else if (!EMAIL_PATTERN.test(form.email.trim())) found.email = t.errEmail;
    if (!form.subject.trim()) found.subject = t.errRequired;
    if (!form.message.trim()) found.message = t.errRequired;
    return found;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (submitting.current) return;

    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    submitting.current = true;
    setStatus("sending");
    setErrorDetail("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
          _subject: `Portfolio: ${form.subject.trim()}`,
          _gotcha: form._gotcha
        })
      });

      if (response.ok) {
        setStatus("sent");
        setForm(EMPTY_FORM);
      } else {
        let detail = `HTTP ${response.status}`;
        try {
          const data = await response.json();
          const message =
            data.error || (Array.isArray(data.errors) ? data.errors.map(item => item.message).join(", ") : "");
          if (message) detail += ` — ${message}`;
          console.error("Formspree refused the submission:", response.status, data);
        } catch {
          console.error("Formspree refused the submission:", response.status);
        }
        setErrorDetail(detail);
        setStatus("error");
      }
    } catch {
      // fetch only throws when the request never reached Formspree (offline, blocked, etc.)
      setStatus("network");
    } finally {
      submitting.current = false;
    }
  }

  const sending = status === "sending";

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <label>
        {t.name}
        <input
          name="name"
          autoComplete="name"
          maxLength={100}
          value={form.name}
          onChange={update("name")}
          placeholder={t.namePh}
          aria-required="true"
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name && <span className="field-error" role="alert">{errors.name}</span>}
      </label>

      <label>
        {t.email}
        <input
          name="email"
          type="email"
          autoComplete="email"
          maxLength={160}
          value={form.email}
          onChange={update("email")}
          placeholder={t.emailPh}
          dir="ltr"
          aria-required="true"
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email && <span className="field-error" role="alert">{errors.email}</span>}
      </label>

      <label>
        {t.subject}
        <input
          name="subject"
          maxLength={150}
          value={form.subject}
          onChange={update("subject")}
          placeholder={t.subjectPh}
          aria-required="true"
          aria-invalid={Boolean(errors.subject)}
        />
        {errors.subject && <span className="field-error" role="alert">{errors.subject}</span>}
      </label>

      <label>
        {t.message}
        <textarea
          name="message"
          rows={4}
          maxLength={3000}
          value={form.message}
          onChange={update("message")}
          placeholder={t.messagePh}
          aria-required="true"
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <span className="field-error" role="alert">{errors.message}</span>}
      </label>

      {/* Honeypot: hidden from people, bots tend to fill it in. Formspree discards those submissions. */}
      <input
        type="text"
        name="_gotcha"
        value={form._gotcha}
        onChange={update("_gotcha")}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="honeypot"
      />

      <button type="submit" className="button button-primary submit-button" disabled={sending}>
        {sending ? t.sending : t.send}
        <Send size={16} />
      </button>

      <div aria-live="polite">
        {status === "sent" && (
          <p className="form-status success">
            <CheckCircle2 size={16} />
            {t.sent}
          </p>
        )}
        {status === "error" && (
          <p className="form-status error">
            {t.error}
            {errorDetail && <small className="error-detail" dir="ltr">{errorDetail}</small>}
          </p>
        )}
        {status === "network" && <p className="form-status error">{t.errorNetwork}</p>}
      </div>
    </form>
  );
}
