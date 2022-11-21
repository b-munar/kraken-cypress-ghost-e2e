import PublishPage from "../pages/publish_post_page.js";

class PublishPostUI {
    constructor() {
        this.publishPage = new PublishPage();
    }

    finishPublish = (scheduleForLater = false) => {
        cy.wait(1000);
        if(scheduleForLater){
            this.publishPage.clickSetTime();
            this.publishPage.clickScheduleForLater();
        }
        this.publishPage.clickContinue();
        this.publishPage.clickPublishNow();
        cy.wait(3000)
        var textCompare = scheduleForLater ? 'All set!' : 'Boom. It’s out there.';
        this.publishPage.getGreenText(textCompare);
    }

    goToEditor = () => {
        this.publishPage.clickEditor();
    }
}
export default new PublishPostUI()