const { Octokit } = require("@octokit/rest");

const GITHUB_ADDRESS_CONST = "https://github.com/";

const getProfileMetrics = async (owner) => {
    return await octokit.rest.repos.getCommunityProfileMetrics({
        owner
    });
}

const getGithubAccountName = () => {
    /**
     * Expected URLs:
     * - https://github.com/JoseRodrigues443/puppy-sender-telegram
     * - https://github.com/JoseRodrigues443
     * - https://github.com/JoseRodrigues443?tab=projects
     * - https://github.com/JoseRodrigues443/joserodrigues443.github.io/tree/master/content
     */
    const subPaths = window.location.href.trim().replace(GITHUB_ADDRESS_CONST).split("/");
    if (subPaths && subPaths.length > 0) {
        return subPaths[0];
    }
    return ""
}

export {
    getProfileMetrics,
    getGithubAccount
}