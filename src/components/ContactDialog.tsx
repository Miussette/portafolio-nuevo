"use client";
import {useLanguage} from "./LanguageProvider";
import {useEffect,useRef} from "react";
import type {FormEvent} from "react";
import {EMAIL} from "@/lib/constants";
export default function ContactDialog({open,onClose}:{open:boolean;onClose:()=>void}){const {t,language}=useLanguage();const ref=useRef<HTMLDialogElement>(null);useEffect(()=>{const dlg=ref.current;if(!dlg)return;if(open&&!dlg.open)dlg.showModal();else if(!open&&dlg.open)dlg.close()},[open]);function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();const d=new FormData(e.currentTarget);const body=`${t("Nombre")}: ${d.get("n")}
${t("Correo")}: ${d.get("e")}
${t("Tipo de proyecto")}: ${d.get("t")}
${t("Presupuesto estimado")}: ${d.get("p")}

${d.get("d")}`;window.location.href=`mailto:${EMAIL}?subject=${encodeURIComponent((language==="es"?"Nuevo proyecto: ":"New project: ")+d.get("t"))}&body=${encodeURIComponent(body)}`;onClose()}return <dialog ref={ref} onClose={onClose}><h2>{t("Cuéntame qué necesitas")}</h2><p className="sub" style={{margin:"6px 0 0"}}>{t("Al enviar se abrirá tu correo con el mensaje listo.")}</p><form onSubmit={submit}><label>{t("Nombre")}<input name="n" required/></label><label>{t("Correo")}<input name="e" type="email" required/></label><label>{t("Tipo de proyecto")}<select name="t"><option>Landing page</option><option>{t("Sitio web corporativo")}</option><option>E-commerce</option><option>{t("Aplicación web")}</option><option>{t("Aplicación móvil")}</option><option>UX/UI</option><option>{t("Otro")}</option></select></label><label>{t("Presupuesto estimado")}<select name="p"><option>{t("Prefiero conversarlo")}</option><option>{t("Menos de $500 USD")}</option><option>{t("$500 – $1.500 USD")}</option><option>{t("$1.500 – $3.000 USD")}</option><option>{t("Más de $3.000 USD")}</option></select></label><label>{t("Detalles")}<textarea name="d" rows={3}/></label><div className="row"><button className="btn main" type="submit">{t("Abrir correo")}</button><button className="btn" type="button" onClick={onClose}>{t("Cerrar")}</button></div></form></dialog>}
