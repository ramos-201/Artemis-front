const ENV = process.env.ENVIRONMENT || 'dev';

const envs = {
    URL_API_BACK : ENV === 'dev' ? 'http://127.0.0.1:8000/' : '...'
}

export default envs;
