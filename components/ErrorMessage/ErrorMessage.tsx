"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./ErrorMessage.css";
import { MouseEvent } from "react";
import { MdError } from "react-icons/md";

type ErrorMessageProps = {
  status: number;
};

export default function ErrorMessage({ status }: ErrorMessageProps) {
  const errorList = [
    { statusNumber: 400, description: "Bad Request" },
    { statusNumber: 404, description: "Not Found" },
    { statusNumber: 408, description: "Request Timeout" },
    { statusNumber: 429, description: "Too Many Requests" },
    { statusNumber: 500, description: "Server Error" },
    { statusNumber: 503, description: "Service Unavailable" },
    { statusNumber: 504, description: "Gateway Timeout" },
  ];

  const errorType = errorList.find((item) => item.statusNumber === status)!;

  const pathname = usePathname();

  function handleRefreshPage(event: MouseEvent) {
    event.preventDefault();

    location.reload();
  }

  return (
    <div className="error-message-component flex-column">
      <MdError className="big-icon" />
      <span className="big-text">
        Error {status} <br /> {errorType.description}
      </span>

      {/* Keeping {status} here instead of errorType.status in case the error is not one of the errors I am willing to handle */}

      {pathname === "/" ? (
        <span className="important-text">
          Cannot access our digital library at the moment.
        </span>
      ) : (
        ""
      )}

      {(status === 429 ||
        status === 500 ||
        status === 503 ||
        status === 504) && (
        <span className="important-text">Try again later.</span>
      )}

      {(status === 400 || status === 408) && (
        <button
          onClick={handleRefreshPage}
          className="button-primary"
          type="button"
        >
          Reload this page
        </button>
      )}

      {pathname === "/" ? (
        ""
      ) : (
        <Link href="/" className="link-pressable">
          Back to Home
        </Link>
      )}
    </div>
  );
}
