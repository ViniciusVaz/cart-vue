const env = (process.env.NODE_ENV === 'development')
    ? 'local'
    : 'production'

export default require(`./config.${env}`).default