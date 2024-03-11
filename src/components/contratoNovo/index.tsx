import { Box, Button, Checkbox, Flex, Input, Select } from "@chakra-ui/react";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { TiArrowBackOutline } from "react-icons/ti";

export function ContratoNovo() {
  const [numAtual, setAtual] = useState(1);

  const nextpage = () => {
    setAtual(numAtual + 1);
  };
  const backpage = () => {
    setAtual(numAtual - 1);
  };

  return (
    <Box>
      {numAtual == 1 && (
        <Box>
          <Input type="text" placeholder="CPF" maxLength={11} />
          <Select>
            <option value={"INNS"}>INNS</option>
            <option value={"0"}>0</option>
          </Select>
          <Input type="text" placeholder="Numero beneficio" />
        </Box> 
      )}
      {numAtual == 2 &&
      <Box>
        <Select>
          <option value={'Masculino'}>Masculino</option>
          <option value={'Feminino'}>Feminino</option>
        </Select>
        <Select>
          <option value={'Casado(a)'}>Casado(a)</option>
          <option value={'Solteiro(a)'}>Solteiro(a)</option>
          <option value={'Divorciado(a)'}>Divorciado(a)</option>
          <option value={'Viuovo(a)'}>Viuvo(a)</option>
        </Select>
        <Input type="text" placeholder="email"/>
        <Input type="number" placeholder="celular"/>
        <Input type="number" placeholder="Telefone"/>
      </Box>
  }
  {numAtual == 3 && 
  <Box>
    <Input type="number" placeholder="exemplo brasil 1058"/>
    <Input type="text" placeholder="uf"/>
    <Input type="text" placeholder="codigo municipio ibge"/>
    <Input type="text" placeholder="Cep"/>
    <Input type="text" placeholder="endereco"/>
    <Input type="text" placeholder="numero"/>
    <Input type="text" placeholder="complemento"/>
    <Input type="text" placeholder="Bairro"/>
    <Input type="text" placeholder="Uf"/>

  </Box>
}
{
  numAtual === 4 && 

<Box>
<Input type="text" placeholder="Cargo"/>
<Input type="text" placeholder="telefone Comercial"/>
<Input type="text" placeholder="email Profissional"/>
<Checkbox>Cidadão Norte americano </Checkbox>
<Checkbox>pessoa Politicamente Exposta</Checkbox>



</Box>
}
      <Flex gap={20}>
       <Button onClick={backpage}><TiArrowBackOutline /></Button>
       <Button onClick={nextpage}> <IoIosArrowForward /> </Button>
       etapa: {numAtual}
       </Flex>
    </Box>

  );
}
