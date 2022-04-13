/**
 * Class representing a GetShortByTag query
 * @param {string} tag The id of the tag to find the shorts for
 */
export class SearchStudentsByTagQuery {
	constructor(public readonly tag: string) {}
}