"use client";
import {useLanguage} from "./LanguageProvider";
import {useEffect,useRef} from "react";
import {GITHUB_CONTRIBUTIONS,GITHUB_URL} from "@/lib/constants";
export default function GitHubActivity(){const {t}=useLanguage();const scrollRef=useRef<HTMLDivElement>(null);useEffect(()=>{if(scrollRef.current)scrollRef.current.scrollLeft=scrollRef.current.scrollWidth},[]);return <section id="github"><h2>{t("Actividad en GitHub")}</h2><p className="sub"><span>162</span> {t("contribuciones entre octubre de 2025 y octubre de 2026.")} <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" style={{color:"var(--accent)"}}>{t("Ver perfil ↗")}</a></p><div className="gh" ref={scrollRef}><div id="ghGrid" role="img" aria-label={t("Gráfico estático de contribuciones de GitHub del último año")}>{Array.from(GITHUB_CONTRIBUTIONS).map((level,index)=><i key={index} data-l={level}/>)}</div></div></section>}
