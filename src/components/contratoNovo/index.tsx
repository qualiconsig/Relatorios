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
            <Input bg={'white'} type="text" placeholder="CPF" maxLength={11} {...register('cpf')} />
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
            <option value={"Viuovo(a)"} {...register('viuvo')}>Viuvo(a)</option>
          </Select>
          <Input bg={'white'} type="email" placeholder="email" {...register('email')}/>
          <Input bg={'white'} type="number" placeholder="celular" {...register('celular')}/>
          <Input  bg={'white'} type="number" placeholder="Telefone" {...register('telefone')}/>
        
          
        </BoxInput>
      )}
      {numAtual == 3 && (
        <BoxInput>
         
            <Input bg='#FFF' type="number" placeholder="exemplo brasil 1058" {...register('cod pais')} />
            <Input bg='#FFF'  type="text" placeholder="uf"  {...register('uf')}/>
            <Input bg='#FFF'  type="text" placeholder="codigo municipio ibge"  {...register('codigo municipio')}/>
            <Input bg='#FFF'  type="text" placeholder="Cep"  {...register('cep')}/>
            <Input bg='#FFF'  type="text" placeholder="endereco" {...register('endereco')} />
            <Input bg='#FFF'  type="text" placeholder="numero" {...register('numero')}/>
            <Input bg='#FFF'  type="text" placeholder="complemento"{...register('complemetno')} />
            <Input bg='#FFF'  type="text" placeholder="Bairro" {...register('Bairro')}/>
            <Input bg='#FFF'  type="text" placeholder="Uf"{...register('Uf')} />
            
         
        </BoxInput>
      )}
      {numAtual === 4 && (
        <BoxInput>
         
          <Input bg='#FFF' type="text" placeholder="Cargo" />
          <Input bg='#FFF' type="text" placeholder="telefone Comercial" />
          <Input bg='#FFF' type="text" placeholder="email Profissional" />
          <Checkbox>Cidadão Norte americano </Checkbox>
          <Checkbox>pessoa Politicamente Exposta</Checkbox>
        
        
        </BoxInput>
      )}
      {numAtual == 5 && (
        <BoxInput >
          <Input bg='#FFF' type="text" placeholder="Tabela Juros" />
          <Input bg='#FFF' type="number" placeholder="Numero Parcelas" />
          <Input bg='#FFF' type="number" placeholder="taxa" />
          <Input bg='#FFF' type="number" placeholder="Valor Parcela" />
          <Input bg='#FFF' type="number" placeholder="Valor Beneficio" />
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
