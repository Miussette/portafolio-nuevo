"use client";
import {useLanguage} from "./LanguageProvider";
import {EMAIL,GITHUB_URL,LINKEDIN_URL} from "@/lib/constants";
export default function Footer(){const {t}=useLanguage();return <footer><div className="wrap"><span>© 2026 Miussette Alfaro Silva</span><div><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a><a href={`mailto:${EMAIL}`}>{t("Correo")}</a></div></div></footer>}
