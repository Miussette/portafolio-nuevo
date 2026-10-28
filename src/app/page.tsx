"use client";
import {useState} from "react";
import {LanguageProvider} from "@/components/LanguageProvider";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import GitHubActivity from "@/components/GitHubActivity";
import Collaboration from "@/components/Collaboration";
import Footer from "@/components/Footer";
import ContactDialog from "@/components/ContactDialog";
export default function Home(){const [contactOpen,setContactOpen]=useState(false);return <LanguageProvider><Header/><main id="top" className="wrap"><Hero onContact={()=>setContactOpen(true)}/><Projects/><Skills/><GitHubActivity/><Collaboration/></main><Footer/><ContactDialog open={contactOpen} onClose={()=>setContactOpen(false)}/></LanguageProvider>}
