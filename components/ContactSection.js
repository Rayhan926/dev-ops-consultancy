import Image from "next/image";
import React from "react";

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[500px,auto] lg:gap-[120px]">
          <div>
            <h2 className="title_md">
              <span className="text-primary">Contact</span> Us
            </h2>
            <p className="body_text mt-2 lg:mt-6 max-w-[60%] lg:max-w-full">
              Schedule a free DevOps assessment session
            </p>
            <form className="mt-8 lg:mt-[50px] space-y-3 lg:space-y-4 lg:max-w-[445px]">
              <input type="text" className="__input" placeholder="Name*" />
              <input type="email" className="__input" placeholder="Email*" />
              <textarea
                rows="6"
                className="__input w-full resize-none"
                placeholder="How we can help you?*"
              ></textarea>

              <button type="submit" className="__button !mt-4 lg:!mt-6">
                Let’s Chat
              </button>
            </form>
          </div>

          <div className="hidden lg:block">
            <div className="scale-[1.25] origin-top-right">
              <Image
                src="/img/contact_img.png"
                width={890 * 2}
                height={809 * 2}
                layout="responsive"
                alt="Contact"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
