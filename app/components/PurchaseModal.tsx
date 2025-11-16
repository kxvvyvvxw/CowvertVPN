"use client";

import React from "react";
import BaseModal from "./BaseModal";

type PurchaseModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const PurchaseModal: React.FC<PurchaseModalProps> = ({ isOpen, onClose }) => {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      ariaLabel="Cowvert purchase information"
    >
      <div className="space-y-3 text-left">
        <p className="text-sm font-semibold text-zinc-900">
          Thanks for your interest!
        </p>
        <p className="text-sm text-zinc-600">
          Cowvert is a concept project built to explore VPN design, UI, and
          product storytelling.
        </p>
        <p className="text-sm text-zinc-600">
          There&apos;s no real app or payment flow behind these buttons yet —
          everything you’re seeing was designed as if it were. 🐮
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

export default PurchaseModal;
