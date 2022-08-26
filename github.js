class GitHub {
    constructor() {
        this.client_id = '1b58debc99c0f0e74226'
        this.client_secret = '8a7a69578effb4e35fed4cd0566ec47183859720'
        this.repos_count = 5
        this.repos_sort = 'created: asc'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoReponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json()
        const repos = await repoReponse.json()

        return {
            profile,
            repos
        }
    }
}  