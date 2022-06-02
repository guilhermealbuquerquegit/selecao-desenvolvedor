import sqlite3 from 'sqlite3'

const DBSOURCE = 'db.sqlite'

const SQL_ITENS_CREATE = `
    CREATE TABLE estados (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        uf TEXT,
        nome TEXT,
        populacao INTEGER
    )`

// const SQL_ITENS_CREATE = `INSERT INTO estados (id,uf,nome,populacao) VALUES (4, 'MG', 'Minas Gerais', 20869101)`

const database = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message)
    throw err
  } else {
    console.log('Base de dados conectada com sucesso.')
    database.run(SQL_ITENS_CREATE, (err) => {
      if (err) {
        // Possivelmente a tabela já foi criada
      } else {
        console.log('Tabela estados criada com sucesso.')
      }
    })
  }
})

export default database
