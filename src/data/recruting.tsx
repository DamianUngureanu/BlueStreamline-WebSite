import { RecrutingData } from "@/types/recrutingData";
import poster from "/public/poster.png";

export const recrutingData:RecrutingData={
    isRecruting:true,
    date:{
        day:24,
        month:10,
        year:2024,
    },
    titleEN:"Recuting is open",
    titleRO:"Recrutările sunt deschise",
    messageEN:"english(S-au deshis înscrierile în echipă de anul acesta. Nu ezita să aplici pentru a participa în echipa noastră)",
    messageRO:"S-au deshis înscrierile în echipă de anul acesta. Nu ezita să aplici pentru a participa în echipa noastră",
    posterPath:poster.src,
    forumLink:"https://bluestreamline.ro/recrutari/",
}