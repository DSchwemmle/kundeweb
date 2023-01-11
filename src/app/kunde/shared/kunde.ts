import { type Temporal } from '@js-temporal/polyfill';

export const NACHNAME_PATTERN = "(o'|von|von der|von und zu|van)?[A-ZÄÖÜ][a-zäöüß]+(-[A-ZÄÖÜ][a-zäöüß]+)?";

export const MIN_KATEGORIE = 0;

export const MAX_KATEGORIE = 9;

export const PLZ_PATTERN = "^\\d{5}$";

export interface Adresse {
    plz: string;
    ort: string;
}

export interface Umsatz {
    betrag: bigint;
    waehrung: string;
}

export interface User {
    username: string;
    password: string;
}

export type FamilienstandType = 'L' | 'VH'| 'G'| 'VW' ;

export type GeschlechtType = 'M' | 'W' | 'D';

export type InteresseTyp = 'S' | 'L' | 'R';

//export type Umsatz = ;

/**
 * Model als Plain-Old-JavaScript-Object (POJO) fuer die Daten *UND*
 * Functions fuer Abfragen und Aenderungen.
 */
export interface Kunde {
    id?: string;
    version?: number;
    nachname: string;
    email: string;
    kategorie: number;
    familienstand: FamilienstandType | undefined;
    geburtsdatum: Temporal.PlainDate | undefined;
    geschlecht: GeschlechtType | undefined;
    hasNewsletter: boolean;
    interessen: string[] | undefined;
    homepage: string | undefined;
    umsatz: Umsatz | undefined;
    adresse: Adresse;
}

/**
 * Gemeinsame Datenfelder unabh&auml;ngig, ob die Buchdaten von einem Server
 * (z.B. RESTful Web Service) oder von einem Formular kommen.
 * Verwendung in den Interfaces:
 * - BuchServer für BuchReadService
 * - BuchForm für CreateBuchComponent
 */
export interface KundeShared {
    nachname: string;
    email: string;
    kategorie: number;
    hasNewsletter: boolean;
    adresse: Adresse;
}
