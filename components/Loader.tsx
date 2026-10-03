"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => { const t = setTimeout(() => setShow(false), 900); return () => clearTimeout(t); }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div aria-hidden className="fixed inset-0 z-[100] grid place-items-center bg-paper" exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
          <div className="font-display text-3xl font-bold text-ink">RAFFI<span className="text-volt">.</span>
            <motion.div className="mt-2 h-0.5 bg-volt" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.8 }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
