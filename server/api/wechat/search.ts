interface Body {
    name: string
}

// Retry configuration
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

async function fetchWithRetry(url: string, options: any, retries = MAX_RETRIES): Promise<any> {
    try {
        return await $fetch(url, options);
    } catch (error) {
        if (retries > 0) {
            await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
            return fetchWithRetry(url, options, retries - 1);
        }
        console.error('All retry attempts failed', { url, error });
        throw error;
    }
}

export default defineEventHandler(async (event) => {
    try {
        // const body: Body = JSON.parse(await readBody(event));
        const body: Body = await readBody(event);
        //
        // // Fetch with retry if not in cache or cache expired
        return await fetchWithRetry('https://netdisk.aipan.me/api/search/a', {
            method: 'GET',
            query: {
                ...body,
                size: 2
            }
        });

        // return {
        //     code: 200,
        //     msg: 'success',
        //     // body,
        //     body2
        // }

    } catch (error) {

        return {
            code: 500,
            msg: 'error',
            error
        };
    }
})
