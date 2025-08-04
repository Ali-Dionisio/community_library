import cron from "node-cron";
import moment from "moment";
import sendEmail from "./email.service.js";
import loanRepositories from "../repositories/loan.repositories.js";

//  minuto - hora - dia - mes - dia da semana
cron.schedule("06 * * * *", async () => {
    console.log("Running daily job to check for due date...");
    
    try {
        const loans = await loanRepositories.findAllLoansRepository();
        const today = moment().startOf("day")

        loans.forEach( async (loan) => {
            const dueDate = moment(loan.dueDate).startOf("day");
            const reminderDueDate = moment(dueDate).subtract(1, "days");
            if(today.isSame(reminderDueDate)){
                sendEmail(loan.email, loan.title, loan.dueDate);
            }
        });
    } catch (error) {
        console.error("Erro ao executar job de verificação", error.message);
    }
});