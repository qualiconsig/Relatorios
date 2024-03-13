import { Box, Button, Checkbox, Flex, FormControl, Input, Select } from "@chakra-ui/react";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { TiArrowBackOutline } from "react-icons/ti";
import { BoxInput } from "./boxinput";
import { Inputs } from "./boxinput/input";
import { Form, SubmitHandler, useForm } from "react-hook-form";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";


export function ContratoNovo() {
  const [numAtual, setAtual] = useState(1);
  const [data, setData] = useState()

  const handle = (e:any, data:any) => {
    e.preventDefault();
  }

  const nextpage = () => {
    if(numAtual < 5) {
      setAtual(numAtual + 1);
    }
   
  };
  const backpage = () => {
    if(numAtual > 1) {
      setAtual(numAtual - 1);
    }
    
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>()
  const onSubmit: SubmitHandler<any> = (data) => {console.log(data)
     nextpage()
      setData(data)
    }

    

  return (
    <Box w={'50vw'} h={'100vh'} display={'flex'} flexDir={'column'} justifyContent={'center'} bg={'gray.800'} color={'white'} borderRadius={'14px'}> 
      <form onSubmit={handleSubmit(onSubmit)}>
      {numAtual == 1 && (
        
        <BoxInput>
            <Input  type="text" placeholder="CPF" maxLength={11} {...register('cpf')} />
            <Select>
              <option value={"Inss"} {...register('inss')}>INNS</option>
              <option value={"0"} {...register('0')}>0</option>
            </Select>
            <Input type="text" placeholder="Numero beneficio" {...register('Numero beneficio')} />
           
        </BoxInput>
      )}
      {numAtual == 2 && (
        <BoxInput >
          
          <Select>
            <option value={"Masculino"} {...register('masculino')}>Masculino</option>
            <option value={"Feminino"} {...register('feminino')}>Feminino</option>
          </Select>
          <Select>
            <option value={"Casado(a)"} {...register('casado')}>Casado(a)</option>
            <option value={"Solteiro(a)"} {...register('solteiro')}>Solteiro(a)</option>
            <option value={"Divorciado(a)"} {...register('divorciado')}>Divorciado(a)</option>
            <option value={"Viuvo(a)"} {...register('viuvo')}>Viuvo(a)</option>
          </Select>
          <Input  type="email" placeholder="email" {...register('email')}/>
          <Input  type="number" placeholder="celular" {...register('celular')}/>
          <Input   type="number" placeholder="Telefone" {...register('telefone')}/>
        
          
        </BoxInput>
      )}
      {numAtual == 3 && (
        <BoxInput>
         
            <Input  type="number" placeholder="exemplo brasil 1058" {...register('cod pais')} />
            <Input  type="text" placeholder="uf"  {...register('uf')}/>
            <Input   type="text" placeholder="codigo municipio ibge"  {...register('codigo municipio')}/>
            <Input   type="text" placeholder="Cep"  {...register('cep')}/>
            <Input   type="text" placeholder="endereco" {...register('endereco')} />
            <Input   type="text" placeholder="numero" {...register('numero')}/>
            <Input   type="text" placeholder="complemento"{...register('complemetno')} />
            <Input   type="text" placeholder="Bairro" {...register('Bairro')}/>
            <Input   type="text" placeholder="Uf"{...register('Uf')} />
            
         
        </BoxInput>
      )}
      {numAtual === 4 && (
        <BoxInput>
         
          <Input  type="text" placeholder="Cargo" />
          <Input  type="text" placeholder="telefone Comercial" />
          <Input  type="text" placeholder="email Profissional" />
          <Checkbox>Cidadão Norte americano </Checkbox>
          <Checkbox>pessoa Politicamente Exposta</Checkbox>
        
        
        </BoxInput>
      )}
      {numAtual == 5 && (
        <BoxInput >
          <Input  type="text" placeholder="Tabela Juros" />
          <Input  type="number" placeholder="Numero Parcelas" />
          <Input  type="number" placeholder="taxa" />
          <Input  type="number" placeholder="Valor Parcela" />
          <Input  type="number" placeholder="Valor Beneficio" />
          <Button type="submit" >enviar<IoIosArrowForward />{" "}</Button>
        </BoxInput>
        
      )}
      
    </form>
     
      <Flex gap={20}  w={'100%'} mt='20px' justify={'center'}  bottom={'50px'}>
        <Button onClick={backpage}>
        <GoArrowLeft />

        </Button>
        <Button onClick={nextpage}>
          <GoArrowRight />
        </Button>
       
        etapa: {numAtual}
      </Flex>
    </Box>
  );
}
