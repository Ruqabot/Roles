import {
    type ActionRowComponents,
    type ComponentInteraction,
    type Message,
    Client,
    Constants,
} from "eris";
import { config } from "dotenv";
import { resolve } from "path";
import { env } from "process";

config({ path: resolve(".env") });

const client = new Client(env.TOKEN!, {
    intents: ["guilds", "guildMessages"],
    messageLimit: 0,
});

client.once("ready", () => {
    console.log(`Logged in as ${client.user.username}`);
});

/**
 * @description Discord normally close the websocket to handle load balance between nodes.
 * Catch the error on "error" event and ignore it.
 */
client.on("error", () => { });

client.on("messageCreate", async (message: Message) => {
    const genderButtons: ActionRowComponents[] = [
        {
            type: Constants.ComponentTypes.BUTTON,
            style: Constants.ButtonStyles.PRIMARY,
            custom_id: "she_her",
            label: "She/Her",
            emoji: {
                name: "❤️",
                id: null,
            },
            disabled: false 
        },
        {
            type: Constants.ComponentTypes.BUTTON,
            style: Constants.ButtonStyles.PRIMARY,
            custom_id: "he_him",
            label: "He/Him",
            emoji: {
                name: "💛",
                id: null,
            },
            disabled: false 
        },
        {
            type: Constants.ComponentTypes.BUTTON,
            style: Constants.ButtonStyles.PRIMARY,
            custom_id: "they_them",
            label: "They/Them",
            emoji: {
                name: "💚",
                id: null,
            },
            disabled: false 
        },
        {
            type: Constants.ComponentTypes.BUTTON,
            style: Constants.ButtonStyles.PRIMARY,
            custom_id: "any_them",
            label: "Any/Them",
            emoji: {
                name: "🤍",
                id: null,
            },
            disabled: false 
        },
    ];

    const useOSButtons: ActionRowComponents[] = [
        {
            type: Constants.ComponentTypes.BUTTON,
            style: Constants.ButtonStyles.PRIMARY,
            custom_id: "windows",
            label: "Windows",
            emoji: {
                name: "🪟",
                id: null,
            },
            disabled: false 
        },
        {
            type: Constants.ComponentTypes.BUTTON,
            style: Constants.ButtonStyles.PRIMARY,
            custom_id: "macos",
            label: "macOS",
            emoji: {
                name: "🗿",
                id: null,
            },
            disabled: false 
        },
        {
            type: Constants.ComponentTypes.BUTTON,
            style: Constants.ButtonStyles.PRIMARY,
            custom_id: "linux",
            label: "GNU/Linux",
            emoji: {
                name: "🐧",
                id: null,
            },
            disabled: false 
        },
        {
            type: Constants.ComponentTypes.BUTTON,
            style: Constants.ButtonStyles.PRIMARY,
            custom_id: "bsd",
            label: "BSD/UNIX",
            emoji: {
                name: "🐠",
                id: null,
            },
            disabled: false 
        },
    ]
    if (message.author.bot) {
        return;
    }

    if (message.content.startsWith("addg")) {
        await message.channel.createMessage({
            content: "😳 Choose the role(s) which is your gender or you'll be pronounced in the server\n\n*(Gender is the range of characteristics pertaining to femininity and masculinity and differentiating between them.)*",
            components: [{
                type: Constants.ComponentTypes.ACTION_ROW,
                components: genderButtons,
            }],
        });
    }

    if (message.content.startsWith("addos")) {
        await message.channel.createMessage({
            content: "🥮 Choose the role(s) which operating system you use for your daily purpose(s)\n\n*(An operating system (OS) is system software that manages computer hardware, software resources, and provides common services for computer programs.)*",
            components: [{
                type: Constants.ComponentTypes.ACTION_ROW,
                components: useOSButtons,
            }],
        });
        return;
    }
})

client.on("interactionCreate", async (interaction: ComponentInteraction) => {
    await interaction.acknowledge();
    switch (interaction.data.custom_id) {
        case "she_her":
            if (!interaction.member?.roles.find((x) => x === "970009014257729657")) {
                await interaction.member?.addRole("970009014257729657", "eyes to discord");
                await epMsg(interaction, "I've added **She/Her** role to you!",  0xf01f84);
            } else {
                await interaction.member?.removeRole("970009014257729657", "eyes to discord");
                await epMsg(interaction, "I've removed **She/Her** role from you!",  0xf01f84);
            }
        break;

        case "he_him":
            if (!interaction.member?.roles.find((x) => x === "970009079449784360")) {    
                await interaction.member?.addRole("970009079449784360", "eyes to discord");
                await epMsg(interaction, "I've added **He/Him** role to you!", 0xb83abd);
            } else {
                await interaction.member?.removeRole("970009079449784360", "eyes to discord");
                await epMsg(interaction, "I've removed **He/Him** role from you!", 0xb83abd);
            }
        break;

        case "they_them":
            if (!interaction.member?.roles.find((x) => x === "970009145967276082")) {
                await interaction.member?.addRole("970009145967276082", "eyes to discord");
                await epMsg(interaction, "I've added **They/Them** role to you!", 0xcbdb51);
            } else {
                await interaction.member?.removeRole("970009145967276082", "eyes to discord");
                await epMsg(interaction, "I've removed **They/Them** role from you!", 0xcbdb51);
            }
        break;

        case "any_them":
            if (!interaction.member?.roles.find((x) => x === "970009214095360010")) {
                await interaction.member?.addRole("970009214095360010", "eyes to discord");
                await epMsg(interaction, "I've added **Any/Them** role to you!", 0xe6905e);
            } else {
                await interaction.member?.removeRole("970009214095360010", "eyes to discord");
                await epMsg(interaction, "I've removed **Any/Them** role from you!", 0xe6905e);
            }
        break;

        case "windows":
            if (!interaction.member?.roles.find((x) => x === "970034161404497980")) {
                await interaction.member?.addRole("970034161404497980", "eyes to discord");
                await epMsg(interaction, "I've added **Windows** role to you!", 0x25b1f7);
            } else {
                await interaction.member?.removeRole("970034161404497980", "eyes to discord");
                await epMsg(interaction, "I've removed **Windows** role from you!", 0x25b1f7);
            }
        break;

        case "macos":
            if (!interaction.member?.roles.find((x) => x === "970034257722503198")) {
                await interaction.member?.addRole("970034257722503198", "eyes to discord");
                await epMsg(interaction, "I've added **macOS** role to you!", 0x176e99);
            } else {
                await interaction.member?.removeRole("970034257722503198", "eyes to discord");
                await epMsg(interaction, "I've removed **macOS** role from you!", 0x176e99);
            }
        break;

        case "linux":
            if (!interaction.member?.roles.find((x) => x === "970034381399916565")) {
                await interaction.member?.addRole("970034381399916565", "eyes to discord");
                await epMsg(interaction, "I've added **GNU/Linux** role to you!", 0x0db583);
            } else {
                await interaction.member?.removeRole("970034381399916565", "eyes to discord");
                await epMsg(interaction, "I've removed **GNU/Linux** role from you!", 0x0db583);
            }
        break;

        case "bsd":
            if (!interaction.member?.roles.find((x) => x === "970034509682704424")) {
                await interaction.member?.addRole("970034509682704424", "eyes to discord");
                await epMsg(interaction, "I've added **BSD** role to you!", 0xd90b6b);
            } else {
                await interaction.member?.removeRole("970034509682704424", "eyes to discord");
                await epMsg(interaction, "I've removed **BSD** role from you!", 0xd90b6b);
            }
        break;

        default:
        break;
    }
});

async function epMsg(ctx: ComponentInteraction, msg: string, color: number): Promise<void> {
    await ctx.createMessage({ embeds: [{
        description: msg,
        color: color,
    }], flags: 64 }); 
}

client.connect();

/**
 * @description Events where if Node.js encounter with an error will be handled.
 * And will ignore those errors.
 */
["uncaughtException", "uncaughtExceptionMonitor", "unhandledRejection"]
.forEach((x) => process.on(x, () => { }));
