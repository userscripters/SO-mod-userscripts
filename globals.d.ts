type OptionType = "string" | "int" | "bool";
type OptionValueType = string | number | boolean;

interface SOMU {
  keyPrefix: string,
  hasInit: boolean,
  sidebar: JQuery | null,
  sidebarContent: JQuery | null,
  store: Storage | import("@userscripters/storage").AsyncStorage;

  addOption(scriptName: string, optionName: string, defaultValue?: boolean, dataType?: "bool"): boolean | undefined;
  addOption(scriptName: string, optionName: string, defaultValue?: number, dataType?: "int"): boolean | undefined;
  addOption(scriptName: string, optionName: string, defaultValue?: string, dataType?: "string"): boolean | undefined;
  addOption(scriptName: string, optionName: string, defaultValue?: string, dataType?: OptionType): boolean | undefined;

  getOptionValue(scriptName: string, optionName: string, defaultValue?: boolean, dataType?: "bool"): boolean;
  getOptionValue(scriptName: string, optionName: string, defaultValue?: number, dataType?: "int"): number;
  getOptionValue(scriptName: string, optionName: string, defaultValue?: string, dataType?: "string"): string;
  getOptionValue(scriptName: string, optionName: string, defaultValue?: OptionValueType, dataType?: OptionType): OptionValueType;

  saveOptionValue(key: string, value: string): void;

  handleSidebarEvents(): void;
  appendStyles(): void;

  init(): void;
}

declare var SOMU: SOMU;
declare var Store: typeof import("@userscripters/storage");

interface Window {
  jQuery: JQueryStatic;
  $: JQueryStatic;
  SOMU: SOMU | undefined;
  Store: typeof Store | undefined;
}

/**
 * ================================
 * Common: Constant Variables
 * ================================
 */
declare var scriptName: string;
declare var scriptSlug: string;
declare var _window: Window;
declare var store: WindowLocalStorage;

declare var monthsOfYear: string[];
declare var daysOfWeek: string[];
declare var MS: object;

declare var _hostname: string;
declare var _chatSiteLink: string;
declare var _chatSiteName: string;
declare var _chatUserId: string;

declare var isChat: boolean;
declare var isMSE: boolean;
declare var isSO: boolean;
declare var isSOMeta: boolean;
declare var isMetaSite: boolean;
declare var isSOTeams: boolean;

declare var isElectionPage: boolean;
declare var isModDashboardPage: boolean;

declare var parentName: string;
declare var parentUrl: string;
declare var metaUrl: string | undefined;
declare var siteApiSlug: string;
declare var teamsRoutePrefix: string;

declare var selfId: number | null;
declare var currentUserId: number | null;
declare function _getFkey(): string | null;
declare var fkey: string | null;

/**
 * ================================
 * Common: Date Functions
 * ================================
 */
declare function seApiDateToDate(apiDate: string): Date | null;
declare function dateToIsoString(date: Date): string;
declare function dateToRelativeTime(date: Date): string;

/**
 * ================================
 * Common: Validation/Boolean Functions
 * ================================
 */
declare function containsDiamondUnicode(str: string): boolean;
declare function isModerator(): boolean;

/**
 * ================================
 * Common: AJAX / Callback / Promise Functions
 * ================================
 */
declare function delay(ms: number): Promise<void>;
declare function ajaxPromise(opts: string | object, type?: string): Promise<Document>;
declare function getFinalUrl(url: string): Promise<Document>;
declare function jQueryXhrOverride(): XMLHttpRequest;
declare function hasBackoff(): boolean;
declare function addBackoff(sec: number): void;

/**
 * ================================
 * Common: String / HTML Parsing / Validation Functions
 * ================================
 */
declare function htmlDecode(input: string): string;
declare function pluralize(amount: number, pluralSuffix?: string, singularSuffix?: string): string;
declare function strToRep(str: string): number;
declare function tryGetNumber(v: any): number;
declare function isPositiveInteger(v: any): boolean;
declare function camelToKebab(str: string): string;

/**
 * ================================
 * Common: Post ID Functions
 * ================================
 */
declare function hasInvalidIds(): boolean;
declare function getPostId(url: string): number | null;
declare function toShortLink(url: string, baseDomain?: string | null): string;

/**
 * ================================
 * Common: User ID Functions
 * ================================
 */
declare function getUserId(url: string): number | null;

/**
 * ================================
 * Common: Location and History Functions
 * ================================
 */
declare function getQueryParam(key: string): string;
declare function goToPost(pid: number): void;

/**
 * ================================
 * Common: DOM Manipulation Functions
 * ================================
 */
declare function setAttributes(el: HTMLElement, attrs: object): void;
declare function makeElem(tagName: string, attrs?: object, text?: string, children?: HTMLElement[]): HTMLElement;
declare function makeElemFromHtml(html: string): HTMLElement;
declare function getDomFromHtml(html: string): HTMLElement;
declare function addStylesheet(css: string, atDocumentEnd?: boolean): void;
declare function addExternalStylesheet(url: string, atDocumentEnd?: boolean): void;

/**
 * ================================
 * Common: Observer / Event Functions
 * ================================
 */
declare function waitForElement(selector: string, context: HTMLElement | Document): Promise<void>

/**
 * ================================
 * Common: Storage Functions
 * ================================
 */
declare function copyToClipboard(content: string | HTMLElement): Promise<void>

/**
 * ================================
 * SE: Users
 * ================================
 */
declare function getUserInfoFromApi(uid: number): Promise<object>;
declare function getUserPii(uid: number): Promise<object>;
declare async function editUserProfile(uid: number, data: object): Promise<object>;
declare async function resetUserDisplayName(uid: number, displayName: string): Promise<object>;
declare async function resetUserProfile(uid: number, displayName: string): Promise<object>;
declare function modMessageUser(uid: number, message?: string, sendEmail?: boolean, suspendDays: number, templateName: string, suspendReason: string): Promise<object>;
declare async function removeUser(uid: number, destroy: boolean, details: string, reason: string, userInfo?: string, pii?: string): Promise<object>;
declare async function deleteUser(uid: number, details: string, reason: string, userInfo?: string, pii?: string): Promise<object>;
declare async function destroyUser(uid: number, details: string, reason: string, userInfo?: string, pii?: string): Promise<object>;

/**
 * ================================
 * SE: Posts
 * ================================
 */
declare function getPostsFromApi(postIds: number[]): Promise<object>;
declare function closeQuestionAsOfftopic(pid:number, closeReasonId?:string, offtopicReasonId?:number, offTopicOtherText?:string, duplicateOfQuestionId?:number): Promise<object>;
declare function closeQuestionAsDuplicate(pid:number, targetPid:number): Promise<object>;
declare function closeSOMetaQuestionAsOfftopic(pid:number, closeReason?: string, offtopicReasonId?:number): Promise<object>;
declare function reopenQuestion(pid:number): Promise<object>;
declare function deletePost(pid:number): Promise<object>;
declare function deletePosts(pids:number[]): Promise<object>;
declare function undeletePost(pid:number): Promise<object>;
declare function undeletePosts(pids:number[]): Promise<object>;
declare function redeletePost(pid:number): Promise<object>;
declare function redeletePosts(pids:number[]): Promise<object>;
declare function lockPost(pid:number, type, hours?: number): Promise<object>;
declare function unlockPost(pid:number): Promise<object>;
declare function protectPost(pid:number): Promise<object>;
declare function unprotectPost(pid:number): Promise<object>;
declare function tryRemoveMultipleAtFromPost(pid:number): Promise<object>;
declare function convertToComment(pid:number, targetId:number): Promise<object>;
declare function convertToEdit(pid:number, targetId:number): Promise<object>;
declare function deleteAsPlagiarism(pid: number): Promise<object>;
declare function flagAsPlagiarism(pid:number, flagText:string, source:string): Promise<object>;
declare function flagAndDeleteAsPlagiarism(pid:number, flagText:string, source:string): Promise<object>;
declare async function getPostTimeline(pid: number): Promise<object>;
declare async function getPostRevisionsFromTimeline(pid: number): Promise<object>;
declare async function getLatestPostRevisionGuid(pid: number): Promise<string>;
declare async function getRevisionSource(guidOrUrl: string): Promise<string>;
declare async function getLatestPostRevisionSource(pid: number): Promise<string>;


/**
 * ================================
 * SE: Comments
 * ================================
 */
declare function addComment(pid:number, commentText:string): Promise<object>;
declare function deleteComment(cid:number, sendCommentBackInMessage:boolean): Promise<object>;
declare function deleteCommentsOnPost(pid:number): Promise<object>;
declare function moveCommentsOnPostToChat(pid:number): Promise<object>;

/**
 * ================================
 * Votes
 * ================================
 */


/**
 * ================================
 * Flags
 * ================================
 */
declare function flagPost(pid:number, rudeFlag?: boolean): Promise<object>;
declare function spamFlagPost(pid:number): Promise<object>;
declare function rudeFlagPost(pid:number): Promise<object>;


/**
 * ================================
 * Mods
 * ================================
 */
declare function sendModMessage(userId:number, templateName:string, postText:string, sendEmail?:boolean, suspendReason?:string, suspendDays?:number): Promise<object>;
declare function sendCmMessage(userId:number, templateName:string, postText:string): Promise<object>;