import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'


function CadastroCategoria(){
  const valoresIniciais ={
    name:'',
    description: '',
    color: '',
  }
  const [categorias, setCategorias] = useState([])
  const [values, setValues] = useState(valoresIniciais)


  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function handleChange(infosDoEvento){
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    )
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.name}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento){
        infosDoEvento.preventDefault()
        setCategorias([
          ...categorias,
          values
        ])
        setValues(valoresIniciais)
      }}>

      <FormField 
        label="Nome da Categoria"
        type="text"
        name="name"
        value={values.nome}
        onChange={handleChange}
      />

      <div>
        <label>
          Descrição:
          <textarea 
            type="text"
            name="description"
            value={values.description}
            onChange={handleChange}
          />
        </label>
      </div>

      <FormField 
        label="Cor"
        type="color"
        name="color"
        value={values.color}
        onChange={handleChange}
      />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.name}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria