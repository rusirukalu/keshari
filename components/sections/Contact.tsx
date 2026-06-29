"use client";

import * as React from "react";
import { useActionState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageSquare, Send, CheckCircle } from "lucide-react";
import Heading from "../Heading";
import Container from "../Container";
import Section from "../Section";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";
import { siteConfig } from "@/lib/config";
import { siteContent } from "@/lib/content";
import { submitInquiryAction, FormState } from "@/app/actions";
import { premiumEase } from "../motion";

const initialState: FormState = {
  success: false,
  message: "",
};

const Contact: React.FC = () => {
  const [state, formAction, isPending] = useActionState(submitInquiryAction, initialState);
  const formRef = React.useRef<HTMLFormElement>(null);

  // Clear form on success
  React.useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state]);

  return (
    <Section id="contact" alternateBg={true} className="border-b border-graphite-200/60 relative">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Contact info panel + Accordion FAQ (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-24">
          <Heading
            title={siteContent.contact.sectionHeading}
            subtitle={siteContent.contact.sectionTitle}
            description={siteContent.contact.sectionDesc}
            align="left"
          />

          {/* Contact Direct options (Conformed to layout rules) */}
          <div className="flex flex-col gap-4">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-5 p-5 h-20 rounded-[24px] border border-graphite-200/80 bg-white hover:border-sage-300 hover:bg-graphite-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2 transition-all shadow-3xs group cursor-pointer"
            >
              <div className="p-2.5 rounded-xl bg-sage-50 border border-sage-100/50 text-sage-600 group-hover:bg-sage-100 transition-colors shrink-0">
                <Phone className="h-4.5 w-4.5" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[9px] uppercase tracking-widest font-bold text-graphite-400 select-none">Call</span>
                <span className="text-sm sm:text-base font-bold text-graphite-900 leading-tight">{siteConfig.contact.phone}</span>
              </div>
            </a>

            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-5 h-20 rounded-[24px] border border-graphite-200/80 bg-white hover:border-sage-300 hover:bg-graphite-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2 transition-all shadow-3xs group cursor-pointer"
            >
              <div className="p-2.5 rounded-xl bg-sage-50 border border-sage-100/50 text-sage-600 group-hover:bg-sage-100 transition-colors shrink-0">
                <MessageSquare className="h-4.5 w-4.5" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[9px] uppercase tracking-widest font-bold text-graphite-400 select-none">WhatsApp</span>
                <span className="text-sm sm:text-base font-bold text-graphite-900 leading-tight">{siteConfig.contact.whatsappDisplay}</span>
              </div>
            </a>

            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-5 p-5 h-20 rounded-[24px] border border-graphite-200/80 bg-white hover:border-sage-300 hover:bg-graphite-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2 transition-all shadow-3xs group cursor-pointer"
            >
              <div className="p-2.5 rounded-xl bg-sage-50 border border-sage-100/50 text-sage-600 group-hover:bg-sage-100 transition-colors shrink-0">
                <Mail className="h-4.5 w-4.5" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[9px] uppercase tracking-widest font-bold text-graphite-400 select-none">Email</span>
                <span className="text-sm sm:text-base font-bold text-graphite-900 leading-tight">{siteConfig.contact.email}</span>
              </div>
            </a>
          </div>

          {/* Inline FAQ Accordion Panel (Conformed to card rules) */}
          <div className="bg-white border border-graphite-200/80 rounded-[32px] p-6 shadow-xs select-none">
            <span className="text-[10px] uppercase tracking-widest font-bold text-graphite-400 block mb-3 font-semibold">
              {siteContent.faq.sectionTitle}
            </span>
            
            <Accordion type="single" collapsible className="w-full">
              {siteContent.faq.items.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className={idx === siteContent.faq.items.length - 1 ? "border-b-0 pb-0" : ""}
                >
                  <AccordionTrigger className="py-2.5 text-sm font-bold leading-tight hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-3 text-xs sm:text-sm">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Inquiry Form Panel + Maps Embed (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6 w-full">
          
          {/* Inquiry form container (Conformed to card rules) */}
          <div className="bg-white border border-graphite-200/80 rounded-[32px] p-8 lg:p-10 shadow-xs relative">
            {state.success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col items-center justify-center text-center py-12 gap-5 select-none"
              >
                <div className="w-14 h-14 rounded-full bg-sage-50 border border-sage-200 text-sage-600 flex items-center justify-center shadow-3xs">
                  <CheckCircle className="h-7 w-7" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-graphite-900 tracking-tight">
                    Enquiry Sent Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-graphite-600 max-w-[340px] mx-auto leading-relaxed text-pretty font-normal">
                    {state.message}
                  </p>
                </div>
              </motion.div>
            ) : (
              <form ref={formRef} action={formAction} className="flex flex-col gap-5">
                
                {/* Form validation alert */}
                {state.message && !state.success && (
                  <div className="p-3.5 rounded-xl bg-destructive/10 border border-destructive/20 text-xs sm:text-sm text-destructive font-semibold leading-relaxed">
                    {state.message}
                  </div>
                )}

                {/* Grid Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Student Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="studentName" className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-graphite-700 select-none">
                      {siteContent.contact.form.nameLabel} <span className="text-destructive font-normal">*</span>
                    </label>
                    <input
                      type="text"
                      id="studentName"
                      name="studentName"
                      required
                      placeholder={siteContent.contact.form.namePlaceholder}
                      className="h-11 px-4 rounded-xl border border-graphite-250 bg-white text-xs sm:text-sm text-graphite-900 placeholder-graphite-400 focus:outline-none focus:border-sage-500 focus:ring-2 focus:ring-sage-500/10 transition-all font-semibold"
                    />
                    {state.errors?.studentName && (
                      <span className="text-xs text-destructive font-semibold mt-1">
                        {state.errors.studentName}
                      </span>
                    )}
                  </div>

                  {/* Parent Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="parentName" className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-graphite-700 select-none">
                      {siteContent.contact.form.parentLabel} <span className="text-destructive font-normal">*</span>
                    </label>
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      required
                      placeholder={siteContent.contact.form.parentPlaceholder}
                      className="h-11 px-4 rounded-xl border border-graphite-250 bg-white text-xs sm:text-sm text-graphite-900 placeholder-graphite-400 focus:outline-none focus:border-sage-500 focus:ring-2 focus:ring-sage-500/10 transition-all font-semibold"
                    />
                    {state.errors?.parentName && (
                      <span className="text-xs text-destructive font-semibold mt-1">
                        {state.errors.parentName}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-graphite-700 select-none">
                      {siteContent.contact.form.emailLabel} <span className="text-destructive font-normal">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder={siteContent.contact.form.emailPlaceholder}
                      className="h-11 px-4 rounded-xl border border-graphite-250 bg-white text-xs sm:text-sm text-graphite-900 placeholder-graphite-400 focus:outline-none focus:border-sage-500 focus:ring-2 focus:ring-sage-500/10 transition-all font-semibold"
                    />
                    {state.errors?.email && (
                      <span className="text-xs text-destructive font-semibold mt-1">
                        {state.errors.email}
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-graphite-700 select-none">
                      {siteContent.contact.form.phoneLabel} <span className="text-destructive font-normal">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder={siteContent.contact.form.phonePlaceholder}
                      className="h-11 px-4 rounded-xl border border-graphite-250 bg-white text-xs sm:text-sm text-graphite-900 placeholder-graphite-400 focus:outline-none focus:border-sage-500 focus:ring-2 focus:ring-sage-500/10 transition-all font-semibold"
                    />
                    {state.errors?.phone && (
                      <span className="text-xs text-destructive font-semibold mt-1">
                        {state.errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* Grade Selector */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="grade" className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-graphite-700 select-none">
                    {siteContent.contact.form.gradeLabel} <span className="text-destructive font-normal">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="grade"
                      name="grade"
                      required
                      className="h-11 px-4 rounded-xl border border-graphite-250 bg-white text-xs sm:text-sm text-graphite-900 w-full appearance-none focus:outline-none focus:border-sage-500 focus:ring-2 focus:ring-sage-500/10 transition-all cursor-pointer font-semibold"
                    >
                      <option value="">{siteContent.contact.form.gradePlaceholder}</option>
                      {siteConfig.teacher.grades.map((g) => (
                        <option key={g.id} value={g.id}>
                          {g.label}
                        </option>
                      ))}
                    </select>
                    {/* Select arrow */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4.5 text-graphite-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                  {state.errors?.grade && (
                    <span className="text-xs text-destructive font-semibold mt-1">
                      {state.errors.grade}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-graphite-700 select-none">
                    {siteContent.contact.form.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder={siteContent.contact.form.messagePlaceholder}
                    className="p-4 rounded-xl border border-graphite-250 bg-white text-xs sm:text-sm text-graphite-900 placeholder-graphite-400 focus:outline-none focus:border-sage-500 focus:ring-2 focus:ring-sage-500/10 transition-all resize-none leading-relaxed font-semibold"
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isPending}
                  variant="default"
                  className="w-full mt-2 h-11 flex items-center justify-center gap-2 text-sm font-bold shadow-2xs"
                >
                  <span>
                    {isPending
                      ? siteContent.contact.form.submittingButton
                      : siteContent.contact.form.submitButton}
                  </span>
                  {!isPending && <Send className="h-4 w-4" />}
                </Button>

              </form>
            )}
          </div>

          {/* Map Location iframe (Conformed to card rules) */}
          <div className="w-full aspect-[2.2] rounded-[32px] overflow-hidden border border-graphite-200/80 shadow-xs relative">
            <iframe
              src={siteConfig.contact.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Colombo Location Map"
              className="grayscale contrast-[1.05]"
            />
            <div className="absolute inset-0 pointer-events-none border border-graphite-200/80 rounded-[32px]" />
          </div>

        </div>

      </Container>
    </Section>
  );
};

export default Contact;
