import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
prisma.trial.update({
    where: {
        id: "test",
    },
    data: {
        patients: {
            connect: {
                id: "test",
            },
        },
    },
});
