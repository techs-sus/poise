window.SIDEBAR_ITEMS = {"attr":["async_trait"],"constant":["ALREADY_AUTHENTICATED","AUTHENTICATION_FAILED","DECODE_ERROR","DISALLOWED_GATEWAY_INTENTS","EMBED_MAX_COUNT","EMBED_MAX_LENGTH","GATEWAY_VERSION","INVALID_GATEWAY_INTENTS","INVALID_SEQUENCE","INVALID_SHARD","LARGE_THRESHOLD","MEMBER_FETCH_LIMIT","MESSAGE_CODE_LIMIT","NOT_AUTHENTICATED","PRESET_GENERAL","PRESET_TEXT","PRESET_VOICE","RATE_LIMITED","SESSION_TIMEOUT","SHARDING_REQUIRED","STICKER_MAX_COUNT","UNKNOWN_ERROR","UNKNOWN_OPCODE","USER_AGENT"],"enum":["Action","ActionRowComponent","ActionType","ActivityType","AfkTimeout","AutoArchiveDuration","AutoModAction","AutomodEventType","ButtonKind","ButtonStyle","Change","Channel","ChannelAction","ChannelOverwriteAction","ChannelParseError","ChannelType","ChunkGuildFilter","ClientError","CommandDataOptionValue","CommandOptionType","CommandPermissionType","CommandType","ComponentInteractionDataKind","ComponentType","ConnectionStage","ConnectionVisibility","ContentModifier","CreateActionRow","CreateInteractionResponse","CreateSelectMenuKind","CreatorMonetizationAction","DefaultMessageNotificationLevel","EmojiAction","EmojiParseError","EntityType","Error","Event","ExplicitContentFilter","FormattedTimestampStyle","ForumEmoji","ForumLayoutType","FullEvent","GatewayError","GatewayEvent","GuildChannelParseError","GuildPagination","GuildParseError","GuildWelcomeChannelEmoji","GuildWidgetStyle","HttpError","ImageHashParseError","InputTextStyle","IntegrationAction","IntegrationExpireBehaviour","Interaction","InteractionType","InviteAction","InviteTargetType","KeywordPresetType","LightMethod","MemberAction","MemberParseError","MembershipState","Mention","MentionParseError","MessageAction","MessageActivityKind","MessagePagination","MessageParseError","MessageType","MfaLevel","ModelError","MultipartUpload","Nonce","NsfwLevel","OnlineStatus","Opcode","PermissionOverwriteType","PremiumTier","PremiumType","ReactionType","ReconnectType","ResolvedTarget","ResolvedValue","RoleAction","RoleParseError","Route","ScheduledEventAction","ScheduledEventPrivacyLevel","ScheduledEventStatus","ScheduledEventType","Scope","ShardAction","ShardQueuerMessage","ShardRunnerMessage","SortOrder","StageInstanceAction","StageInstancePrivacyLevel","StickerAction","StickerFormatType","StickerType","ThreadAction","Trigger","TriggerType","Unresolved","UserPagination","UserParseError","VerificationLevel","VideoQualityMode","VoiceChannelStatusAction","WebhookAction","WebhookType"],"fn":["collect","content_safe","deserialize_errors","parse_channel","parse_channel_mention","parse_emoji","parse_invite","parse_message_id_pair","parse_message_url","parse_quotes","parse_role","parse_role_mention","parse_user_mention","parse_user_tag","parse_username","parse_webhook","shard_id","validate_token"],"mod":["audit_log","automod","builder","cache","client","close_codes","collector","colours","constants","framework","futures","gateway","http","json","model","prelude","token","utils"],"struct":["ActionExecution","ActionRow","Activity","ActivityAssets","ActivityButton","ActivityData","ActivityEmoji","ActivityFlags","ActivityParty","ActivitySecrets","ActivityTimestamps","AddMember","AffectedRole","AfkMetadata","ApplicationFlags","ApplicationId","Attachment","AttachmentId","AuditLogEntry","AuditLogEntryId","AuditLogs","AutoModActionExecutionEvent","AutoModRuleCreateEvent","AutoModRuleDeleteEvent","AutoModRuleUpdateEvent","AutocompleteChoice","AutocompleteOption","Ban","BotGateway","Button","Cache","CacheRef","ChannelCreateEvent","ChannelDeleteEvent","ChannelFlags","ChannelId","ChannelMention","ChannelPinsUpdateEvent","ChannelUpdateEvent","Client","ClientBuilder","ClientStatus","CollectorCallback","Colour","Command","CommandData","CommandDataOption","CommandDataResolved","CommandId","CommandInteraction","CommandOption","CommandOptionChoice","CommandPermission","CommandPermissionId","CommandPermissions","CommandPermissionsUpdateEvent","CommandVersionId","ComponentInteraction","ComponentInteractionCollector","ComponentInteractionData","Connection","Content","ContentSafeOptions","Context","CreateAllowedMentions","CreateAttachment","CreateAutocompleteResponse","CreateBotAuthParameters","CreateButton","CreateChannel","CreateCommand","CreateCommandOption","CreateCommandPermission","CreateEmbed","CreateEmbedAuthor","CreateEmbedFooter","CreateForumPost","CreateForumTag","CreateGuildWelcomeChannel","CreateInputText","CreateInteractionResponseFollowup","CreateInteractionResponseMessage","CreateInvite","CreateMessage","CreateModal","CreateQuickModal","CreateScheduledEvent","CreateSelectMenu","CreateSelectMenuOption","CreateStageInstance","CreateSticker","CreateThread","CreateWebhook","CurrentApplicationInfo","CurrentUser","CustomMessage","DiscordJsonError","DiscordJsonSingleError","EditAttachments","EditAutoModRule","EditChannel","EditCommandPermissions","EditGuild","EditGuildWelcomeScreen","EditGuildWidget","EditInteractionResponse","EditMember","EditMessage","EditProfile","EditRole","EditScheduledEvent","EditStageInstance","EditSticker","EditThread","EditVoiceState","EditWebhook","EditWebhookMessage","Embed","EmbedAuthor","EmbedField","EmbedFooter","EmbedImage","EmbedProvider","EmbedThumbnail","EmbedVideo","Emoji","EmojiId","EmojiIdentifier","EmojiIdentifierParseError","ErrorResponse","EventCollector","ExecuteWebhook","FollowedChannel","FormattedTimestamp","FormattedTimestampParseError","ForumTag","ForumTagId","Gateway","GatewayIntents","GenericId","GetMessages","Guild","GuildAuditLogEntryCreateEvent","GuildBanAddEvent","GuildBanRemoveEvent","GuildChannel","GuildCreateEvent","GuildDeleteEvent","GuildEmojisUpdateEvent","GuildId","GuildInfo","GuildIntegrationsUpdateEvent","GuildMemberAddEvent","GuildMemberFlags","GuildMemberRemoveEvent","GuildMemberUpdateEvent","GuildMembersChunkEvent","GuildPreview","GuildPrune","GuildRoleCreateEvent","GuildRoleDeleteEvent","GuildRoleUpdateEvent","GuildScheduledEventCreateEvent","GuildScheduledEventDeleteEvent","GuildScheduledEventUpdateEvent","GuildScheduledEventUserAddEvent","GuildScheduledEventUserRemoveEvent","GuildStickersUpdateEvent","GuildUpdateEvent","GuildWelcomeChannel","GuildWelcomeScreen","GuildWidget","Http","HttpBuilder","ImageHash","Incident","IncidentUpdate","InputText","InstallParams","Integration","IntegrationAccount","IntegrationApplication","IntegrationCreateEvent","IntegrationDeleteEvent","IntegrationId","IntegrationUpdateEvent","InteractionCreateEvent","InteractionId","InteractionResponseFlags","InvalidToken","Invite","InviteChannel","InviteCreateEvent","InviteDeleteEvent","InviteGuild","InviteStageInstance","Maintenance","Member","MembersIter","Message","MessageActivity","MessageApplication","MessageBuilder","MessageCollector","MessageCreateEvent","MessageDeleteBulkEvent","MessageDeleteEvent","MessageFlags","MessageId","MessageInteraction","MessageReaction","MessageReference","MessageUpdateEvent","MessagesIter","ModalInteraction","ModalInteractionCollector","ModalInteractionData","Multipart","Options","PartialChannel","PartialCurrentApplicationInfo","PartialGuild","PartialGuildChannel","PartialIntegration","PartialMember","PartialThreadMember","PermissionOverwrite","Permissions","PingInteraction","Presence","PresenceData","PresenceUpdateEvent","PresenceUser","PresencesReplaceEvent","PrivateChannel","QuickModalResponse","Ratelimit","RatelimitInfo","Ratelimiter","RatelimitingBucket","Reaction","ReactionAddEvent","ReactionCollector","ReactionConversionError","ReactionRemoveAllEvent","ReactionRemoveEmojiEvent","ReactionRemoveEvent","Ready","ReadyEvent","Request","ResolvedOption","ResumedEvent","RichInvite","Role","RoleId","RoleSubscriptionData","RoleTags","Rule","RuleId","ScheduledEvent","ScheduledEventId","ScheduledEventMetadata","ScheduledEventUser","SelectMenu","SelectMenuOption","SessionStartLimit","Settings","Shard","ShardId","ShardInfo","ShardManager","ShardManagerOptions","ShardMessenger","ShardQueuer","ShardRunner","ShardRunnerInfo","ShardRunnerOptions","ShardStageUpdateEvent","SkuId","StageInstance","StageInstanceCreateEvent","StageInstanceDeleteEvent","StageInstanceId","StageInstanceUpdateEvent","StatusCode","Sticker","StickerId","StickerItem","StickerPack","StickerPackBannerId","StickerPackId","SystemChannelFlags","TargetId","Team","TeamMember","ThreadCreateEvent","ThreadDeleteEvent","ThreadListSyncEvent","ThreadMember","ThreadMemberFlags","ThreadMemberUpdateEvent","ThreadMembersUpdateEvent","ThreadMetadata","ThreadUpdateEvent","ThreadsData","Timestamp","TriggerMetadata","Typing","TypingStartEvent","UnavailableGuild","UnknownEvent","User","UserId","UserPublicFlags","UserUpdateEvent","VoiceChannelStatusUpdateEvent","VoiceRegion","VoiceServerUpdateEvent","VoiceState","VoiceStateUpdateEvent","Webhook","WebhookChannel","WebhookGuild","WebhookId","WebhookUpdateEvent","WsClient"],"trait":["ArgumentConvert","Builder","CacheHttp","CacheUpdate","EmbedMessageBuilding","EventHandler","Framework","FutureExt","Mentionable","RawEventHandler"],"type":["AttachmentType","ChannelMessagesRef","Color","CurrentUserRef","GuildChannelRef","GuildChannelsRef","GuildRef","GuildRoleRef","GuildRolesRef","MemberRef","MessageRef","RequestBuilder","Result","SettingsRef","UserRef"]};