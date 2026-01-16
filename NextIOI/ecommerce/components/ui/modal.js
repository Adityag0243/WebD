"use client";
import { useEffect } from "react";
import styles from "./modal.module.css";

export default function Modal({ isOpen, onClose, children }) {

    if (!isOpen) return null;
    console.log("Modal Opened :::  ", isOpen);

    return (
        <div className={styles.backdrop} onClick={onClose}>
            <div
                className={styles.modal}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                role="dialog"
                aria-modal="true"
            >
                <button className={styles.closeBtn} onClick={onClose}>
                    ✕
                </button>
                {children}
            </div>
        </div>
    );
}
