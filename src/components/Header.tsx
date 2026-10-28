"use client";
import {useLanguage} from "./LanguageProvider";
import {useEffect,useState} from "react";
export default function Header(){const {t,language,toggleLanguage}=useLanguage();
 const [theme,setTheme]=useState<"light"|"dark">("dark");
 useEffect(()=>{const stored=localStorage.getItem("theme");const initial=stored==="light"||stored==="dark"?stored:window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";document.documentElement.dataset.theme=initial;setTheme(initial)},[]);
 function toggle(){const next=theme==="dark"?"light":"dark";setTheme(next);document.documentElement.dataset.theme=next;localStorage.setItem("theme",next)}
 return <header><div className="wrap"><a className="brand" href="#top">Miu Works</a><nav aria-label={t("Principal")}><a href="#proyectos">{t("Proyectos")}</a><a href="#habilidades">{t("Habilidades")}</a><a href="#github">GitHub</a><a href="#colaboracion">{t("Colaboración")}</a></nav><button className="tbtn" onClick={toggle} aria-label={t("Cambiar tema")} aria-pressed={theme==="light"}>{t("Tema")}</button><button className="tbtn" onClick={toggleLanguage} aria-label={language==="es"?"Switch to English":"Cambiar a español"}>{language==="es"?"EN":"ES"}</button></div></header>
}
