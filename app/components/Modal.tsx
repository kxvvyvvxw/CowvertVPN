"use client";

import React from "react";
import BaseModal from "./BaseModal";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      ariaLabel="Cowvert download information"
    >
      <div className="space-y-3 text-left">
        <p className="text-sm font-semibold text-zinc-900">
          Heads up — this isn&apos;t a real download.
        </p>
        <p className="text-sm text-zinc-600">
          Cowvert is a concept project built to explore clean UI,
          security-minded UX, and product storytelling.
        </p>
        <p className="text-sm text-zinc-600">
          There&apos;s no live app behind this button (yet), but everything
          you&apos;re seeing was designed and built as if it were. 🐮
        </p>
      </div>
      <div className="mt-6 flex justify-end">
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-800 shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50"
        >
          Close
        </button>
      </div>
    </BaseModal>
  );
};

export default Modal;




