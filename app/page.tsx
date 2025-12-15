"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Produtos from "../components/Produtos";
import Features from "../components/Features";
import About from "../components/About";
import Clientes from "../components/Clientes";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import { motion } from "framer-motion";

export default function Home() {
  const linguagens = [
    { nome: "JavaScript / TypeScript", exp: 90 },
    { nome: "HTML / CSS", exp: 95 },
    { nome: "Python", exp: 60 },
  ];
  const frameworks = [
    { nome: "React", exp: 90 },
    { nome: "Next.js", exp: 85 },
    { nome: "TailwindCSS", exp: 90 },
    { nome: "Node.js", exp: 70 },
  ];
  const bancos = [
    { nome: "PostgreSQL", exp: 70 },
    { nome: "MongoDB", exp: 65 },
    { nome: "MySQL", exp: 60 },
  ];
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main className="pt-4">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="section relative py-24"
        >
          <div className="container relative z-10">
            <Hero />
          </div>
        </motion.section>
        
        <motion.section
          id="sobre"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section relative py-12"
        >
          <About />
        </motion.section>
        {/* Produtos */}
        <motion.section
          id="produtos"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section relative py-12"
        >
          <div className="container relative z-10">
            <Produtos />
          </div>
        </motion.section>

        {/* Soluções */}
        <motion.section
          id="solucoes"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section relative py-12"
        >
          <div className="container relative z-10">
            <Features />
          </div>
        </motion.section>

        {/* Clientes */}
        <motion.section
          id="clientes"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section relative py-12"
        >
          <div className="container relative z-10">
            <Clientes />
          </div>
        </motion.section>

        

        {/* Contato */}
        <motion.section
          id="contato"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section relative py-12"
        >
          <div className="container relative z-10">
            <h3 className="section-title mb-8">Fale Comigo</h3>
            <ContactForm />
          </div>
        </motion.section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
