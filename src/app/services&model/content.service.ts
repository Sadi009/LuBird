import { Content } from "./content.model";

export class ContentService {
    private pageContent: Content[] = [
        new Content("01", "Angular", "Web"),
        new Content("02", "Ionic", "Web-App"),
        new Content("03", "NodeJS", "Back-End"),
        new Content("04", "Mongo", "Database"),
        new Content("05", "Bus Tracking", "GPS")
    ];

    getPageContent() {
        return this.pageContent.slice();
    }
    getContentId(index: number) {
        return this.pageContent[index];
    }
}