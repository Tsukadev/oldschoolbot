const { Language, util } = require('klasa');

module.exports = class extends Language {
	constructor(...args) {
		super(...args);
		this.language = {
			/*
			 *
			 * Default Klasa Keys
			 *
			 */
			DEFAULT: key =>
				`${key} has not been localized for en-US yet. If you're seeing this, its a bug! Please join the support support and let us know. <http://support.oldschool.gg/>`,
			DEFAULT_LANGUAGE: 'Default Language',
			PREFIX_REMINDER: (prefix = `@${this.client.user.tag}`) =>
				`The prefix${
					Array.isArray(prefix)
						? `es for this guild are: ${prefix.map(pre => `\`${pre}\``).join(', ')}`
						: ` in this guild is set to: \`${prefix}\``
				}`,
			SETTING_GATEWAY_EXPECTS_GUILD:
				'The parameter <Guild> expects either a Guild or a Guild Object.',
			SETTING_GATEWAY_VALUE_FOR_KEY_NOEXT: (data, key) =>
				`The value ${data} for the key ${key} does not exist.`,
			SETTING_GATEWAY_VALUE_FOR_KEY_ALREXT: (data, key) =>
				`The value ${data} for the key ${key} already exists.`,
			SETTING_GATEWAY_SPECIFY_VALUE: 'You must specify the value to add or filter.',
			SETTING_GATEWAY_KEY_NOT_ARRAY: key => `The key ${key} is not an Array.`,
			SETTING_GATEWAY_KEY_NOEXT: key =>
				`The key ${key} does not exist in the current data schema.`,
			SETTING_GATEWAY_INVALID_TYPE: 'The type parameter must be either add or remove.',
			SETTING_GATEWAY_INVALID_FILTERED_VALUE: (piece, value) =>
				`${piece.key} doesn't accept the value: ${value}`,
			RESOLVER_MULTI_TOO_FEW: (name, min = 1) =>
				`Provided too few ${name}s. At least ${min} ${min === 1 ? 'is' : 'are'} required.`,
			RESOLVER_INVALID_BOOL: name => `${name} must be true or false.`,
			RESOLVER_INVALID_CHANNEL: name => `${name} must be a channel tag or valid channel id.`,
			RESOLVER_INVALID_CUSTOM: (name, type) => `${name} must be a valid ${type}.`,
			RESOLVER_INVALID_DATE: name => `${name} must be a valid date.`,
			RESOLVER_INVALID_DURATION: name => `${name} must be a valid duration string.`,
			RESOLVER_INVALID_EMOJI: name => `${name} must be a custom emoji tag or valid emoji id.`,
			RESOLVER_INVALID_FLOAT: name => `${name} must be a valid number.`,
			RESOLVER_INVALID_GUILD: name => `${name} must be a valid guild id.`,
			RESOLVER_INVALID_INT: name => `${name} must be an integer.`,
			RESOLVER_INVALID_LITERAL: name =>
				`Your option did not match the only possibility: ${name}`,
			RESOLVER_INVALID_MEMBER: name => `${name} must be a mention or valid user id.`,
			RESOLVER_INVALID_MESSAGE: name => `${name} must be a valid message id.`,
			RESOLVER_INVALID_PIECE: (name, piece) => `${name} must be a valid ${piece} name.`,
			RESOLVER_INVALID_REGEX_MATCH: (name, pattern) =>
				`${name} must follow this regex pattern \`${pattern}\`.`,
			RESOLVER_INVALID_ROLE: name => `${name} must be a role mention or role id.`,
			RESOLVER_INVALID_STRING: name => `${name} must be a valid string.`,
			RESOLVER_INVALID_TIME: name => `${name} must be a valid duration or date string.`,
			RESOLVER_INVALID_URL: name => `${name} must be a valid url.`,
			RESOLVER_INVALID_USER: name => `${name} must be a mention or valid user id.`,
			RESOLVER_STRING_SUFFIX: ' characters',
			RESOLVER_MINMAX_EXACTLY: (name, min, suffix) =>
				`${name} must be exactly ${min}${suffix}.`,
			RESOLVER_MINMAX_BOTH: (name, min, max, suffix) =>
				`${name} must be between ${min} and ${max}${suffix}.`,
			RESOLVER_MINMAX_MIN: (name, min, suffix) =>
				`${name} must be greater than ${min}${suffix}.`,
			RESOLVER_MINMAX_MAX: (name, max, suffix) =>
				`${name} must be less than ${max}${suffix}.`,
			REACTIONHANDLER_PROMPT: 'Which page would you like to jump to?',
			COMMANDMESSAGE_MISSING: 'Missing one or more required arguments after end of input.',
			COMMANDMESSAGE_MISSING_REQUIRED: name => `${name} is a required argument.`,
			COMMANDMESSAGE_MISSING_OPTIONALS: possibles =>
				`Missing a required option: (${possibles})`,
			COMMANDMESSAGE_NOMATCH: possibles =>
				`Your option didn't match any of the possibilities: (${possibles})`,
			// eslint-disable-next-line max-len
			MONITOR_COMMAND_HANDLER_REPROMPT: (tag, error, time, abortOptions) =>
				`${tag} | **${error}** | You have **${time}** seconds to respond to this prompt with a valid argument. Type **${abortOptions.join(
					'**, **'
				)}** to abort this prompt.`,
			// eslint-disable-next-line max-len
			MONITOR_COMMAND_HANDLER_REPEATING_REPROMPT: (tag, name, time, cancelOptions) =>
				`${tag} | **${name}** is a repeating argument | You have **${time}** seconds to respond to this prompt with additional valid arguments. Type **${cancelOptions.join(
					'**, **'
				)}** to cancel this prompt.`,
			MONITOR_COMMAND_HANDLER_ABORTED: 'Aborted',
			INHIBITOR_COOLDOWN: remaining =>
				`You have just used this command. You can use this command again in ${remaining} second${
					remaining === 1 ? '' : 's'
				}.`,
			INHIBITOR_DISABLED_GUILD: 'This command has been disabled by an admin in this guild.',
			INHIBITOR_DISABLED_GLOBAL: 'This command has been globally disabled by the bot owner.',
			INHIBITOR_MISSING_BOT_PERMS: missing =>
				`I'm missing these permissions, please give me them so I can function properly <:peepoOSBot:601695641088950282> - **${missing}**`,
			INHIBITOR_NSFW: 'You can only use NSFW commands in NSFW channels.',
			INHIBITOR_PERMISSIONS: 'You do not have permission to use this command.',
			INHIBITOR_REQUIRED_SETTINGS: settings =>
				`The guild is missing the **${settings.join(', ')}** guild setting${
					settings.length !== 1 ? 's' : ''
				} and thus the command cannot run.`,
			INHIBITOR_RUNIN: types => `This command is only available in ${types} channels.`,
			INHIBITOR_RUNIN_NONE: name =>
				`The ${name} command is not configured to run in any channel.`,
			COMMAND_BLACKLIST_DESCRIPTION:
				'Blacklists or un-blacklists users and guilds from the bot.',
			COMMAND_BLACKLIST_SUCCESS: (usersAdded, usersRemoved, guildsAdded, guildsRemoved) =>
				[
					usersAdded.length
						? `**Users Added**\n${util.codeBlock('', usersAdded.join(', '))}`
						: '',
					usersRemoved.length
						? `**Users Removed**\n${util.codeBlock('', usersRemoved.join(', '))}`
						: '',
					guildsAdded.length
						? `**Guilds Added**\n${util.codeBlock('', guildsAdded.join(', '))}`
						: '',
					guildsRemoved.length
						? `**Guilds Removed**\n${util.codeBlock('', guildsRemoved.join(', '))}`
						: ''
				]
					.filter(val => val !== '')
					.join('\n'),
			COMMAND_EVAL_DESCRIPTION: 'Evaluates arbitrary Javascript. Reserved for bot owner.',
			COMMAND_EVAL_EXTENDEDHELP: [
				'The eval command evaluates code as-in, any error thrown from it will be handled.',
				'It also uses the flags feature. Write --silent, --depth=number or --async to customize the output.',
				'The --silent flag will make it output nothing.',
				"The --depth flag accepts a number, for example, --depth=2, to customize util.inspect's depth.",
				'The --async flag will wrap the code into an async function where you can enjoy the use of await, however, if you want to return something, you will need the return keyword.',
				'The --showHidden flag will enable the showHidden option in util.inspect.',
				"If the output is too large, it'll send the output as a file, or in the console if the bot does not have the ATTACH_FILES permission."
			].join('\n'),
			COMMAND_EVAL_ERROR: (time, output, type) =>
				`**Error**:${output}\n**Type**:${type}\n${time}`,
			COMMAND_EVAL_OUTPUT: (time, output, type) =>
				`**Output**:${output}\n**Type**:${type}\n${time}`,
			COMMAND_EVAL_SENDFILE: (time, type) =>
				`Output was too long... sent the result as a file.\n**Type**:${type}\n${time}`,
			COMMAND_EVAL_SENDCONSOLE: (time, type) =>
				`Output was too long... sent the result to console.\n**Type**:${type}\n${time}`,
			COMMAND_UNLOAD: (type, name) => `✅ Unloaded ${type}: ${name}`,
			COMMAND_UNLOAD_DESCRIPTION: 'Unloads the klasa piece.',
			COMMAND_UNLOAD_WARN:
				"You probably don't want to unload that, since you wouldn't be able to run any command to enable it again",
			COMMAND_TRANSFER_ERROR: '❌ That file has been transfered already or never existed.',
			COMMAND_TRANSFER_SUCCESS: (type, name) =>
				`✅ Successfully transferred ${type}: ${name}.`,
			COMMAND_TRANSFER_FAILED: (type, name) =>
				`Transfer of ${type}: ${name} to Client has failed. Please check your Console.`,
			COMMAND_TRANSFER_DESCRIPTION: 'Transfers a core piece to its respective folder.',
			COMMAND_RELOAD: (type, name, time) => `✅ Reloaded ${type}: ${name}. (Took: ${time})`,
			COMMAND_RELOAD_FAILED: (type, name) =>
				`❌ Failed to reload ${type}: ${name}. Please check your Console.`,
			COMMAND_RELOAD_ALL: (type, time) => `✅ Reloaded all ${type}. (Took: ${time})`,
			COMMAND_RELOAD_EVERYTHING: time => `✅ Reloaded everything. (Took: ${time})`,
			COMMAND_RELOAD_DESCRIPTION: 'Reloads a klasa piece, or all pieces of a klasa store.',
			COMMAND_REBOOT: 'Rebooting...',
			COMMAND_REBOOT_DESCRIPTION: 'Reboots the bot.',
			COMMAND_LOAD: (time, type, name) =>
				`✅ Successfully loaded ${type}: ${name}. (Took: ${time})`,
			COMMAND_LOAD_FAIL:
				'The file does not exist, or an error occurred while loading your file. Please check your console.',
			COMMAND_LOAD_ERROR: (type, name, error) =>
				`❌ Failed to load ${type}: ${name}. Reason:${util.codeBlock('js', error)}`,
			COMMAND_LOAD_DESCRIPTION: 'Load a piece from your bot.',
			COMMAND_PING: 'Ping?',
			COMMAND_PING_DESCRIPTION: 'Runs a connection test to Discord.',
			COMMAND_PINGPONG: (diff, ping) =>
				`Pong! (Roundtrip took: ${diff}ms. Heartbeat: ${ping}ms.)`,
			COMMAND_INVITE: () => [
				`To add ${this.client.user.username} to your discord guild:`,
				`<${this.client.invite}>`,
				util.codeBlock(
					'',
					[
						'The above link is generated requesting the minimum permissions required to use every command currently.',
						"I know not all permissions are right for every guild, so don't be afraid to uncheck any of the boxes.",
						'If you try to use a command that requires more permissions than the bot is granted, it will let you know.'
					].join(' ')
				),
				'Please file an issue at <https://github.com/dirigeants/klasa> if you find any bugs.'
			],
			COMMAND_INVITE_DESCRIPTION: 'Displays the join guild link of the bot.',
			COMMAND_INFO: [
				"Klasa is a 'plug-and-play' framework built on top of the Discord.js library.",
				'Most of the code is modularized, which allows developers to edit Klasa to suit their needs.',
				'',
				'Some features of Klasa include:',
				'• 🐇💨 Fast loading times with ES2017 support (`async`/`await`)',
				'• 🎚🎛 Per-client/guild/user settings that can be extended with your own fields',
				'• 💬 Customizable command system with automated parameter resolving and the ability to load/reload commands on-the-fly',
				'• 👀 "Monitors", which can watch messages and edits (for swear filters, spam protection, etc.)',
				'• ⛔ "Inhibitors", which can prevent commands from running based on any condition you wish to apply (for permissions, blacklists, etc.)',
				'• 🗄 "Providers", which simplify usage of any database of your choosing',
				'• ✅ "Finalizers", which run after successful commands (for logging, collecting stats, cleaning up responses, etc.)',
				'• ➕ "Extendables", which passively add methods, getters/setters, or static properties to existing Discord.js or Klasa classes',
				'• 🌐 "Languages", which allow you to localize your bot\'s responses',
				'• ⏲ "Tasks", which can be scheduled to run in the future, optionally repeating',
				'',
				'We hope to be a 100% customizable framework that can cater to all audiences. We do frequent updates and bugfixes when available.',
				"If you're interested in us, check us out at https://klasa.js.org"
			],
			COMMAND_INFO_DESCRIPTION: 'Provides some information about this bot.',
			COMMAND_HELP_DESCRIPTION: 'Display help for a command.',
			COMMAND_HELP_NO_EXTENDED: 'No extended help available.',
			COMMAND_HELP_DM:
				'📥 | The list of commands you have access to has been sent to your DMs.',
			COMMAND_HELP_NODM:
				"❌ | You have DMs disabled, I couldn't send you the commands in DMs.",
			COMMAND_HELP_USAGE: usage => `Usage :: ${usage}`,
			COMMAND_HELP_EXTENDED: 'Extended Help ::',
			COMMAND_ENABLE: (type, name) => `+ Successfully enabled ${type}: ${name}`,
			COMMAND_ENABLE_DESCRIPTION:
				'Re-enables or temporarily enables a command/inhibitor/monitor/finalizer. Default state restored on reboot.',
			COMMAND_DISABLE: (type, name) => `+ Successfully disabled ${type}: ${name}`,
			COMMAND_DISABLE_DESCRIPTION:
				'Re-disables or temporarily disables a command/inhibitor/monitor/finalizer/event. Default state restored on reboot.',
			COMMAND_DISABLE_WARN:
				"You probably don't want to disable that, since you wouldn't be able to run any command to enable it again",
			COMMAND_CONF_NOKEY: 'You must provide a key',
			COMMAND_CONF_NOVALUE: 'You must provide a value',
			COMMAND_CONF_GUARDED: name => `${util.toTitleCase(name)} may not be disabled.`,
			COMMAND_CONF_UPDATED: (key, response) =>
				`Successfully updated the key **${key}**: \`${response}\``,
			COMMAND_CONF_KEY_NOT_ARRAY:
				"This key is not array type. Use the action 'reset' instead.",
			COMMAND_CONF_GET_NOEXT: key => `The key **${key}** does not seem to exist.`,
			COMMAND_CONF_GET: (key, value) => `The value for the key **${key}** is: \`${value}\``,
			COMMAND_CONF_RESET: (key, response) =>
				`The key **${key}** has been reset to: \`${response}\``,
			COMMAND_CONF_NOCHANGE: key => `The value for **${key}** was already that value.`,
			COMMAND_CONF_SERVER_DESCRIPTION: 'Define per-guild settings.',
			COMMAND_CONF_SERVER: (key, list) => `**Guild Settings${key}**\n${list}`,
			COMMAND_CONF_USER_DESCRIPTION: 'Define per-user settings.',
			COMMAND_CONF_USER: (key, list) => `**User Settings${key}**\n${list}`,
			COMMAND_STATS: (
				memUsage,
				uptime,
				users,
				guilds,
				channels,
				klasaVersion,
				discordVersion,
				processVersion,
				message
			) => [
				'= STATISTICS =',
				'',
				`• Mem Usage  :: ${memUsage} MB`,
				`• Uptime     :: ${uptime}`,
				`• Users      :: ${users}`,
				`• Guilds     :: ${guilds}`,
				`• Channels   :: ${channels}`,
				`• Klasa      :: v${klasaVersion}`,
				`• Discord.js :: v${discordVersion}`,
				`• Node.js    :: ${processVersion}`,
				`• Shard      :: ${(message.guild ? message.guild.shardID : 0) + 1} / ${
					this.client.options.totalShardCount
				}`
			],
			COMMAND_STATS_DESCRIPTION: 'Provides some details about the bot and stats.',
			MESSAGE_PROMPT_TIMEOUT: 'The prompt has timed out.',
			TEXT_PROMPT_ABORT_OPTIONS: ['abort', 'stop', 'cancel'],
			/*
			 *
			 * Custom Old School Bot keys
			 *
			 */

			/*
			 * Configuration Commands
			 */

			JOY_REACTIONS_ALREADY_ENABLED: `😂 Reactions are already enabled in this channel.`,
			JOY_REACTIONS_ENABLED_OTHER: `😂 Reactions are already enabled in another channel, but I've switched them to use this channel.`,
			JOY_REACTIONS_ENABLED: `Enabled 😂 Reactions in this channel.`,
			JOY_REACTIONS_ARENT_ENABLED: "😂 Reactions aren't enabled, so you can't disable them.",
			JOY_REACTIONS_DISABLED: 'Disabled 😂 Reactions in this channel.',

			ASH_TWEETS_ALREADY_ENABLED: `Ash Tweets are already enabled in this channel.`,
			ASH_TWEETS_ENABLED_OTHER: `Ash Tweets are already enabled in another channel, but I've switched them to use this channel.`,
			ASH_TWEETS_ENABLED: `Enabled Ash Tweets in this channel.`,
			ASH_TWEETS_ARENT_ENABLED: "Ash Tweets aren't enabled, so you can't disable them.",
			ASH_TWEETS_DISABLED: 'Disabled Ash Tweets in this channel.',

			AUTO_UPDATE_NO_RSN: prefix =>
				`You must have an RSN set to Autoupdate. Use \`${prefix}setrsn <username>\``,
			AUTO_UPDATE: state =>
				`Turned Auto Updating for your account ${state ? '**on**.' : '**off**.'}`,

			CMD_ISNT_DISABLED: "That command isn't disabled.",
			CMD_ENABLED: name => `Successfully enabled the \`${name}\` command.`,
			CMD_ALREADY_DISABLED: 'That command is already disabled.',
			CMD_DISABLED: name => `Successfully disabled the \`${name}\` command.`,

			HCIM_TWEETS_ALREADY_ENABLED: `HCIM Death Tweets are already enabled in this channel.`,
			HCIM_TWEETS_ENABLED_OTHER: `HCIM Death Tweets are already enabled in another channel, but I've switched them to use this channel.`,
			HCIM_TWEETS_ENABLED: `Enabled HCIM Death Tweets in this channel.`,
			HCIM_TWEETS_ARENT_ENABLED:
				"HCIM Death Tweets aren't enabled, so you can't disable them.",
			HCIM_TWEETS_DISABLED: 'Disabled HCIM Death Tweets in this channel.',

			JMOD_COMMENTS_ALREADY_ENABLED: `JMod Comments are already enabled in this channel.`,
			JMOD_COMMENTS_ENABLED_OTHER: `JMod Comments are already enabled in another channel, but I've switched them to use this channel.`,
			JMOD_COMMENTS_ENABLED: `Enabled JMod Comments in this channel.`,
			JMOD_COMMENTS_ARENT_ENABLED: "JMod Comments aren't enabled, so you can't disable them.",
			JMOD_COMMENTS_DISABLED: 'Disabled JMod Comments in this channel.',

			PET_MESSAGES_ALREADY_ENABLED: `Pet Messages are already enabled in this channel.`,
			PET_MESSAGES_ENABLED: `Enabled Pet Messages in this channel.`,
			PET_MESSAGES_ARENT_ENABLED: "Pet Messages aren't enabled, so you can't disable them.",
			PET_MESSAGES_DISABLED: 'Disabled Pet Messages in this channel.',

			PREFIX_CURRENT: prefix => `The current prefix for your guild is: \`${prefix}\``,
			PREFIX_CHANGED: (name, prefix) => `Changed Command Prefix for ${name} to \`${prefix}\``,

			RSN_CURRENT: RSN => `Your current RSN is: \`${RSN}\``,
			RSN_NOT_SET: prefix =>
				`You don't have an RSN set. You can set one like this: \`${prefix}setrsn <username>\``,
			RSN_INVALID: 'That username is not valid.',
			RSN_SET_ALREADY: RSN => `Your RSN is already set to \`${RSN}\``,
			RSN_CHANGED: (old, RSN) => `Changed your RSN from \`${old}\` to \`${RSN}\``,
			RSN_SET_TO: RSN => `Your RSN has been set to: \`${RSN}\`.`,

			STREAMER_TWEETS_ALREADY_ENABLED: `Streamer Tweets are already enabled in this channel.`,
			STREAMER_TWEETS_ENABLED_OTHER: `Streamer Tweets are already enabled in another channel, but I've switched them to use this channel.`,
			STREAMER_TWEETS_ENABLED: `Enabled Streamer Tweets in this channel.`,
			STREAMER_TWEETS_ARENT_ENABLED:
				"Streamer Tweets aren't enabled, so you can't disable them.",
			STREAMER_TWEETS_DISABLED: 'Disabled Streamer Tweets in this channel.',

			JMOD_TWEETS_ALREADY_ENABLED: `Jmod Tweets are already enabled in this channel.`,
			JMOD_TWEETS_ENABLED_OTHER: `Jmod Tweets are already enabled in another channel, but I've switched them to use this channel.`,
			JMOD_TWEETS_ENABLED: `Enabled Jmod Tweets in this channel.`,
			JMOD_TWEETS_ARENT_ENABLED: "Jmod Tweets aren't enabled, so you can't disable them.",
			JMOD_TWEETS_DISABLED: 'Disabled Jmod Tweets in this channel.',

			TN_ALREADY_ENABLED: `Twitch Notifications are already enabled in this channel.`,
			TN_ENABLED_OTHER: `Twitch Notifications are already enabled in another channel, but I've switched them to use this channel.`,
			TN_ENABLED: `Enabled Twitch Notifications in this channel.`,
			TN_ARENT_ENABLED: "Twitch Notifications aren't enabled, so you can't disable them.",
			TN_DISABLED: 'Disabled Twitch Notifications in this channel.',
			TN_NO_STREAMER: prefix =>
				`Please include which streamer you want to add, like this: \`${prefix}tn add B0aty\``,
			TN_INVALID_STREAMER:
				"That streamer doesn't look like a Old School RuneScape Streamer to me. You can request they be added in the support server.",
			TN_ALREADY_ENABLED_STREAMER:
				'Twitch Notifications are already enabled for this streamer.',
			TN_ADDED_STREAMER: name =>
				`Successfully added ${name}. You will receive a message here when they go live.`,
			TN_NO_STREAMER_REMOVE: prefix =>
				`Please include which streamer you want to remove, like this: \`${prefix}tn remove B0aty\``,
			TN_NOT_ENABLED_STREAMER:
				"Twitch Notifications aren't enabled for this streamer, so you cannot remove them.",
			TN_REMOVE: name => `Successfully removed ${name}.`,
			TN_NOT_ENABLED: 'Twitch Notifications are not enabled in this guild.',
			TN_NO_STREAMERS: 'You have Twitch Notifications enabled, but no streamers added.',
			CHANNEL_DISABLED:
				'Channel disabled. Staff of this server can still use commands in this channel.',
			CHANNEL_ENABLED: 'Channel enabled. Anyone can use commands in this channel now.',

			/*
			 * CrystalMathLabs Commands
			 */
			TT200_RESULT: (username, time) =>
				`**${username}**'s Time to 200m All is **${time}** hours.`,

			/*
			 * Fun Commands
			 */
			NO_PETS: prefix => `You have no pets yet.

You can get pets by talking in a server which has petmessages enabled. (\`${prefix}petmessages enable\`)`,
			NO_QUOTE: "Couldn't find a quote.",
			URBAN_NO_ENTRY: 'No entry found',
			URBAN_RESULT: (search, result, wdef) => `**Word:** ${search}
**Definition:** _${wdef}_
**Example:**\n${result.example}
**${result.thumbs_up}** 👍 | **${result.thumbs_down}** 👎
*By ${result.author}*
<${result.permalink}>`,
			/*
			 * OSRS Account Commands
			 */
			CLUE_SCORE_FORMAT: (rank, score) =>
				`**Rank:** ${rank.toLocaleString()}\n**Score:** ${score.toLocaleString()}\n`
		};
	}

	async init() {
		await super.init();
	}
};
