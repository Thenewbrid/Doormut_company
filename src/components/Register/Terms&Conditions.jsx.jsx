import React from "react";
import check from "../../assets/check-icon.png";
import { Link } from "react-router-dom";

// TODO: Add Terms and Condition of Service
const TermsAndConditions = ({closeTerms}) => {
  return (
    <div className="h-[100vh] self-center fixed z-50  top-0 bottom-0 w-[100%] bg-[#0000003f] flex items-center justify-center">
      <div className="flex flex-col  items-center justify-center p-7 md:p-8 w-[25rem] xl:w-[45rem] md:w-[45rem] bg-white rounded-2xl">
        <div className="flex flex-col gap-4 items-left h-[38rem] xl:h-[30rem] md:h-[38rem] overflow-y-scroll w-full justify-start">
          <div className="flex flex-col gap-1 items-left w-full justify-start">
            <div className="flex flex-col gap-2 items-left w-full justify-start">
              <h1 className="text-[20px] text-left font-Quicksand font-semibold ">
                Terms and Conditions
              </h1>
              <p className="text-[12px] text-left font-Quicksand mb-2">
                Welcome to Doormut Vendors! These Terms and Conditions govern
                your use of the Doormut Vendors platform and services. By
                accessing or using our platform, you agree to be bound by these
                Terms and Conditions. Please read them carefully before using
                our services.
              </p>
            </div>
            <li className="text-[12px] text-left font-Quicksand list-decimal">
              <span className="text-[14px] mr-2 ml-0.5 font-semibold text-left font-Quicksand">
                Acceptance of Terms: 
              </span>
             By accessing or using the Doormut Vendors platform, you agree to
              comply with these Terms and Conditions. If you do not agree with
              any part of these terms, you may not access or use our services.
            </li>
            <li className="text-[12px] text-left font-Quicksand list-decimal">
              <span className="text-[14px] mr-2 ml-0.5 font-semibold text-left font-Quicksand">
                Registration: 
              </span>
              In order to use our platform as a vendor, you must register an
              account and provide accurate and complete information. You are
              responsible for maintaining the confidentiality of your account
              and password and for restricting access to your account. You agree
              to accept responsibility for all activities that occur under your
              account.
            </li>
            <li className="text-[12px] text-left font-Quicksand list-decimal">
              <span className="text-[14px] mr-2 ml-0.5 font-semibold text-left font-Quicksand">
                Vendor Responsibilities: 
              </span>
              As a vendor on Doormut Vendors, you agree to abide by all
              applicable laws and regulations and to adhere to our policies and
              guidelines. You are responsible for the accuracy and legality of
              the products or services you list on our platform.
            </li>
            <li className="text-[12px] text-left font-Quicksand list-decimal">
              <span className="text-[14px] mr-2 ml-0.5 font-semibold text-left font-Quicksand">
                Fees and Payments: 
              </span>
              Doormut Vendors may charge fees for the use of our platform or for
              specific services. By using our services, you agree to pay any
              applicable fees and abide by our payment terms.
            </li>
            <li className="text-[12px] text-left font-Quicksand list-decimal">
              <span className="text-[14px] mr-2 ml-0.5 font-semibold text-left font-Quicksand">
                Intellectual Property: 
              </span>
              All content and materials on the Doormut Vendors platform,
              including logos, trademarks, and software, are the property of
              Doormut Vendors or its licensors and are protected by copyright
              and other intellectual property laws.
            </li>
            <li className="text-[12px] text-left font-Quicksand list-decimal">
              <span className="text-[14px] mr-2 ml-0.5 font-semibold text-left font-Quicksand">
                Prohibited Activities: 
              </span>
              You agree not to engage in any activities that violate these Terms
              and Conditions or any applicable laws or regulations. This
              includes but is not limited to fraud, copyright infringement, and
              unauthorized access to our platform.
            </li>
            <li className="text-[12px] text-left font-Quicksand list-decimal">
              <span className="text-[14px] mr-2 ml-0.5 font-semibold text-left font-Quicksand">
                Termination: 
              </span>
              We reserve the right to terminate or suspend your account and
              access to our services at any time for any reason, without prior
              notice.
            </li>
            <li className="text-[12px] text-left font-Quicksand list-decimal">
              <span className="text-[14px] mr-2 ml-0.5 font-semibold text-left font-Quicksand">
                Changes to Terms: 
              </span>
              We may update or modify these Terms and Conditions from time to
              time without prior notice. It is your responsibility to review
              these terms periodically for changes.
            </li>
            <li className="text-[12px] text-left font-Quicksand list-decimal">
              <span className="text-[14px] mr-2 ml-0.5 font-semibold text-left font-Quicksand">
                Disclaimer of Warranties: 
              </span>
              Our platform and services are provided on an "as is" and "as
              available" basis without any warranties of any kind. We do not
              guarantee that our platform will be error-free or uninterrupted.
            </li>
            <li className="text-[12px] text-left font-Quicksand list-decimal">
              <span className="text-[14px] mr-2 ml-0.5 font-semibold text-left font-Quicksand">
                Limitation of Liability: 
              </span>
              In no event shall Doormut Vendors be liable for any direct,
              indirect, incidental, special, or consequential damages arising
              out of or in any way connected with your use of our platform or
              services.
            </li>
            <li className="text-[12px] text-left font-Quicksand list-decimal">
              <span className="text-[14px] mr-2 ml-0.5 font-semibold text-left font-Quicksand">
                Governing Law: 
              </span>
              These Terms and Conditions shall be governed by and construed in
              accordance with the laws of [Your Country], without regard to its
              conflict of law provisions.
            </li>
            <li className="text-[12px] text-left font-Quicksand list-decimal">
              <span className="text-[14px] mr-2 ml-0.5 font-semibold text-left font-Quicksand">
                Contact Us: 
              </span>
              If you have any questions or concerns about these Terms and
              Conditions, please contact us at [contact@email.com].
            </li>
            <p className="text-[12px] text-left font-semibold font-Quicksand mb-2">
              By using the Doormut Vendors platform, you acknowledge that you
              have read, understood, and agree to be bound by these Terms and
              Conditions.
            </p>
          </div>

          <div className="border-[1px] w-full bg-slate-400" />

          <div className="flex flex-col gap-1 items-left w-full justify-start">
            <div className="flex flex-col gap-2 items-left w-full justify-start">
              <h1 className="text-[20px] text-left font-Quicksand font-semibold ">
                Privacy Policy
              </h1>
              <p className="text-[12px] text-left font-Quicksand mb-2">
                At Doormut Vendors, we are committed to protecting your privacy.
                This Privacy Policy outlines how we collect, use, and disclose
                information when you use our platform and services.
              </p>
            </div>
            <li className="text-[12px] text-left font-Quicksand list-decimal">
              <span className="text-[14px] mr-2 ml-0.5 font-semibold text-left font-Quicksand">
                Information We Collect: 
              </span>
              When you register an account on Doormut Vendors, we may collect
              personal information such as your name, email address, and payment
              information. We also collect information about your use of our
              platform, including your interactions with other users and the
              products or services you list or purchase.
            </li>
            <li className="text-[12px] text-left font-Quicksand list-decimal">
              <span className="text-[14px] mr-2 ml-0.5 font-semibold text-left font-Quicksand">
                How We Use Your Information: 
              </span>
              We may use the information we collect to provide and improve our
              services, communicate with you, and personalize your experience on
              our platform. We may also use your information to comply with
              legal obligations or enforce our Terms and Conditions.
            </li>
            <li className="text-[12px] text-left font-Quicksand list-decimal">
              <span className="text-[14px] mr-2 ml-0.5 font-semibold text-left font-Quicksand">
                Sharing Your Information: 
              </span>
              We may share your information with third-party service providers
              who assist us in operating our platform and providing our
              services. We may also share your information with other users in
              accordance with your interactions on our platform.
            </li>
            <li className="text-[12px] text-left font-Quicksand list-decimal">
              <span className="text-[14px] mr-2 ml-0.5 font-semibold text-left font-Quicksand">
                Data Security: 
              </span>
              We take reasonable measures to protect the security of your
              information and prevent unauthorized access, disclosure, or
              alteration. However, no method of transmission over the internet
              or electronic storage is 100% secure, and we cannot guarantee
              absolute security.
            </li>
            <li className="text-[12px] text-left font-Quicksand list-decimal">
              <span className="text-[14px] mr-2 ml-0.5 font-semibold text-left font-Quicksand">
                Your Choices: 
              </span>
              You may choose not to provide certain information, but this may
              limit your ability to use certain features of our platform. You
              may also update or delete your information at any time by
              accessing your account settings.
            </li>
            <li className="text-[12px] text-left font-Quicksand list-decimal">
              <span className="text-[14px] mr-2 ml-0.5 font-semibold text-left font-Quicksand">
                Third-Party Links: 
              </span>
              Our platform may contain links to third-party websites or services
              that are not owned or controlled by Doormut Vendors. We are not
              responsible for the privacy practices or content of these
              third-party sites.
            </li>
            <li className="text-[12px] text-left font-Quicksand list-decimal">
              <span className="text-[14px] mr-2 ml-0.5 font-semibold text-left font-Quicksand">
                Changes to Privacy Policy: 
              </span>
              We may update or modify this Privacy Policy from time to time
              without prior notice. We will notify you of any changes by posting
              the new Privacy Policy on our platform.
            </li>
            <li className="text-[12px] text-left font-Quicksand list-decimal">
              <span className="text-[14px] mr-2 ml-0.5 font-semibold text-left font-Quicksand">
                Contact Us: 
              </span>
              If you have any questions or concerns about this Privacy Policy,
              please contact us at [contact@doormut.com].
            </li>
            <p className="text-[12px] text-left font-semibold font-Quicksand mb-2">
               By using the Doormut Vendors platform, you acknowledge that you
              have read, understood, and agree to be bound by this Privacy
              Policy.
            </p>
          </div>
        </div>
        <button onClick={() => closeTerms(false)} className="bg-[#3bb77e] text-white p-1 w-[12rem] md:w-[8rem] rounded-full md:-mr-[28rem] md:-mb-5 xl:-mb-4 -mb-5 mt-3 md:mt-4 xl:mt-2">
          OK
        </button>
      </div>
    </div>
  );
};

export default TermsAndConditions;