"use client";

import type { EmailFormFields } from "react-mailchimp-subscribe";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import { useRef } from "react";
import { Text } from "@/lib/components";

const url =
  "https://weebly.us16.list-manage.com/subscribe/post?u=96e1277e37e6f4c2940cd1dc9&id=3cdf6c3ea8";

const EmailForm = () => {
  const ref_email = useRef<HTMLInputElement>(null);
  const ref_fname = useRef<HTMLInputElement>(null);
  const ref_lname = useRef<HTMLInputElement>(null);
  let ref_sub: (data: EmailFormFields) => void;

  let springLoad = true;
  function validate() {
    let formData = {
      EMAIL: ref_email.current?.value ?? "",
      FNAME: ref_fname.current?.value ?? "",
      LNAME: ref_lname.current?.value ?? "",
    };
    ref_sub(formData);
  }
  function spring() {
    console.log(spring);
    if (springLoad) {
      window.scrollTo(0, 384);
      springLoad = false;
    }
  }
  return (
    <div className="form spaceChildren">
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => {
          return (
            <div className="flex spaceChildrenSmall">
              <>
                {(ref_sub = subscribe)}

                {(status == null || status === "sending") && (
                  // Mailchimp doesn't ever seem to return an "already subscribed" message.
                  // ||
                  // (status === "error" &&
                  // message.indexOf("already subscribed") === -1)
                  <div className="inputs">
                    <input
                      type="email"
                      placeholder="Your email"
                      ref={ref_email}
                    />
                    <input
                      type="firstname"
                      placeholder="First Name"
                      ref={ref_fname}
                    />
                    <input
                      type="lastname"
                      placeholder="Last Name"
                      ref={ref_lname}
                    />
                  </div>
                )}

                {status === "success" && spring()}
                {status === "error" && spring()}

                {status === "success" && (
                  <Text
                    size="XL"
                    className="wait show dx bold color blue"
                    style={{
                      marginBottom: "32px",
                      marginTop: "8px",
                    }}
                  >
                    Subscribed!
                  </Text>
                )}
                {status === "success" && (
                  <Text className="wait show dx bold color gray">
                    Thank you.
                  </Text>
                )}
                {/* {status === "error" &&
                  message.indexOf("already subscribed") >= 0 && (
                    <Text
                      className="wait show dx bold color blue"
                      size="XL"
                      style={{
                        marginBottom: "32px",
                        marginTop: "8px",
                      }}
                    >
                      You are already subscribed.
                    </Text>
                  )} */}
                {/* {status === "error" &&
                  message.indexOf("already subscribed") >= 0 && (
                    <Text className="wait show dx color gray">Thank you.</Text>
                  )} */}

                <div className="flex spaceChildrenSmall">
                  {(status == null || status === "sending") && (
                    // ||
                    // (status === "error" &&
                    //  message.indexOf("already subscribed") === -1)
                    <button
                      className="button fill blue"
                      onClick={validate}
                      style={{ border: "none", cursor: "pointer" }}
                    >
                      <Text>{status === "sending" ? "• • •" : "Sign-up"}</Text>
                    </button>
                  )}
                  {status === "error" && (
                    // &&
                    // message.indexOf("already subscribed") === -1
                    <Text style={{ color: "red" }}>
                      Error, please check your inputs and try again
                    </Text>
                  )}
                  {(status == null || status === "sending") && (
                    // ||
                    // (status === "error" &&
                    // message.indexOf("already subscribed") === -1)
                    <Text className="S color gray nano">
                      Mail services provided by{" "}
                      <a target="noreferer" href="https://mailchimp.com">
                        MailChimp
                      </a>
                      . By signing up, you agree to their{" "}
                      <a
                        target="noreferer"
                        href="https://mailchimp.com/legal/privacy/"
                      >
                        privacy policy
                      </a>
                      .
                    </Text>
                  )}
                </div>
              </>
            </div>
          );
        }}
      />
    </div>
  );
};

export default EmailForm;
