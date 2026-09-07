import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Logo from "./Logo";
import { company } from "../data/company";
import { services } from "../data/services";

const initial = {
  name: "",
  phone: "",
  email: "",
  companyName: "",
  interest: "",
  message: "",
};

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.phone.trim()) {
    errors.phone = "Please enter a phone number.";
  } else if (!/^[0-9+\-\s()]{7,15}$/.test(values.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!values.email.trim()) {
    errors.email = "Please enter an email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.message.trim()) errors.message = "Tell us a little about your requirement.";
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      const subject = encodeURIComponent(
        `Enquiry from ${values.name}${values.companyName ? " (" + values.companyName + ")" : ""}`
      );
      const body = encodeURIComponent(
        `Name: ${values.name}\nPhone: ${values.phone}\nEmail: ${values.email}\nCompany: ${values.companyName}\nService / Product: ${values.interest}\n\nMessage:\n${values.message}`
      );
      window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="border border-steel-line bg-white p-8 flex flex-col items-center text-center gap-3">
        <CheckCircle2 className="text-maroon" size={40} strokeWidth={1.5} />
        <h3 className="font-display font-bold text-xl text-ink">Your email app should now be open</h3>
        <p className="text-steel text-sm max-w-sm">
          We've prepared your enquiry for {company.email}. Send it from your mail
          app and our team will respond within 48 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm font-semibold text-maroon border-b border-maroon"
        >
          Edit and send again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative flex flex-col gap-5 overflow-hidden">
      <Logo className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-96 max-w-[95%] -translate-x-1/2 -translate-y-1/2 opacity-[0.045]" />
      <div className="relative z-10 grid sm:grid-cols-2 gap-5">
        <Field
          label="Full Name"
          name="name"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
          autoComplete="name"
          required
        />
        <Field
          label="Phone"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          error={errors.phone}
          autoComplete="tel"
          required
        />
      </div>
      <div className="relative z-10 grid sm:grid-cols-2 gap-5">
        <Field
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          autoComplete="email"
          required
        />
        <Field
          label="Company"
          name="companyName"
          value={values.companyName}
          onChange={handleChange}
          autoComplete="organization"
        />
      </div>

      <label className="relative z-10 flex flex-col gap-1.5">
        <span className="text-sm font-medium text-ink">Service or Product</span>
        <select
          name="interest"
          value={values.interest}
          onChange={handleChange}
          className="border border-steel-line bg-white px-4 py-3 text-sm focus:border-maroon outline-none"
        >
          <option value="">Select an area (optional)</option>
          {services.map((s) => (
            <option key={s.id} value={s.navLabel}>
              {s.navLabel}
            </option>
          ))}
          <option value="General Enquiry">General Enquiry</option>
        </select>
      </label>

      <label className="relative z-10 flex flex-col gap-1.5">
        <span className="text-sm font-medium text-ink">
          Message <span className="text-maroon">*</span>
        </span>
        <textarea
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          placeholder="Tell us about your component, drawing, quantity or timeline."
          className={`border px-4 py-3 text-sm focus:border-maroon outline-none resize-none ${
            errors.message ? "border-red-500" : "border-steel-line"
          }`}
        />
        {errors.message && <span className="text-xs text-red-600">{errors.message}</span>}
      </label>

      <button
        type="submit"
        className="relative z-10 bg-maroon hover:bg-maroon-deep transition-colors text-white font-semibold px-7 py-4 w-fit"
      >
        Send Enquiry
      </button>
    </form>
  );
}

function Field({ label, name, value, onChange, error, type = "text", autoComplete, required }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-ink">
        {label} {required && <span className="text-maroon">*</span>}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        className={`border px-4 py-3 text-sm focus:border-maroon outline-none ${
          error ? "border-red-500" : "border-steel-line"
        }`}
      />
      {error && <span className="text-xs text-red-600">{error}</span>}
    </label>
  );
}
