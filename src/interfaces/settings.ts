interface DbConfig {
    dialect: string,
    host: string,
    port: string
}

interface Settings {
    port?: string,
    db_name: string,
    db_user: string,
    db_password: string,
    db_config: DbConfig
}