# Mona Lisa Interativa - P5.js

## 📌 Descrição do Projeto

Uma recriação interativa da famosa pintura "Mona Lisa" de Leonardo da Vinci usando P5.js. O projeto apresenta:

- **Olhos que acompanham o cursor do mouse** 👀
- **Paleta de cores organizada** baseada na obra original
- **Interface limpa e responsiva**
- **Detalhes artísticos** (cabelo, roupas, expressão facial)

## 🎨 Características Principais

### 1. Olhos Interativos
Os olhos da Mona Lisa seguem o movimento do seu mouse em tempo real usando trigonometria:
- Cálculo do ângulo usando `atan2(mouseY - posY, mouseX - posX)`
- Movimento suave da pupila dentro da íris
- Efeito realista com brilho nos olhos

### 2. Paleta de Cores Organizada
```javascript
const cores = {
    pele: '#D4A574',        // Tom de pele realista
    pelaClara: '#E8C9B0',   // Realce
    pelaEscura: '#A0825A',  // Sombra
    fundoEsquerdo: '#8B7355',  // Fundo (escuro)
    fundoDireito: '#6B5D4F',    // Fundo (meio)
    cabelo: '#3D2817',      // Cabelo escuro
    olho: '#5C4033',        // Íris
    pupila: '#1A0F0A',      // Pupila
    brancoDosOlhos: '#FFF8DC',  // Esclera
    boca: '#C97A7A',        // Boca
    sobrancelha: '#4A3728'  // Sobrancelha
};
```

### 3. Estrutura do Desenho
O projeto é organizado em funções modulares:
- `desenharFundo()` - Fundo com gradiente
- `desenharCorpo()` - Vestido e roupas
- `desenharRosto()` - Rosto principal com sombreamento
- `desenharCabelo()` - Cabelo volumoso
- `desenharOlhos()` - Olhos interativos **[PRINCIPAL]**
- `desenharNariz()` - Nariz em perspectiva
- `desenharBoca()` - Sorriso misterioso
- `desenharDetalhes()` - Linhas de expressão

## 🚀 Como Usar

### Opção 1: Abrir localmente
1. Baixe os arquivos do projeto
2. Coloque na pasta do repositório
3. Abra `index.html` no navegador

### Opção 2: Usar em um servidor web
```bash
# Se tiver Python 3 instalado
python -m http.server 8000

# Ou Node.js com http-server
npx http-server
```

## 💻 Código-Chave: Olhos Interativos

### Cálculo do Movimento da Pupila
```javascript
// Olho esquerdo
let anguloEsquerdo = atan2(mouseY - olhoEsquerdoY, mouseX - olhoEsquerdoX);
let distanciaEsquerda = 8; // Raio de movimento
let pupilaEsquerdaX = olhoEsquerdoX + cos(anguloEsquerdo) * distanciaEsquerda;
let pupilaEsquerdaY = olhoEsquerdoY + sin(anguloEsquerdo) * distanciaEsquerda;
```

**Explicação:**
- `atan2()` calcula o ângulo entre a pupila e o mouse
- `cos()` e `sin()` convertem o ângulo em coordenadas X e Y
- `distanciaEsquerda` controla o quão longe a pupila se move

### Atualização em Tempo Real
```javascript
function mouseMoved() {
    redraw(); // Redesenha o canvas quando o mouse se move
}
```

## 📊 Técnicas Utilizadas

1. **Trigonometria**: Cálculo de ângulos para seguir o mouse
2. **Shapes Complexos**: `beginShape()` e `endShape()` para formas irregulares
3. **Gradientes Simulados**: Múltiplas formas com transparência
4. **Elipses e Arcos**: Para criar os elementos do rosto
5. **Event Handling**: Detecção de movimento do mouse

## 🎓 Aprendizados

Este projeto é ótimo para aprender:
- ✅ Trigonometria em P5.js
- ✅ Animações baseadas em entrada do usuário
- ✅ Estrutura modular de código
- ✅ Manipulação de cores e formas
- ✅ Detecção de eventos de mouse

## 📝 Modificações Possíveis

### Aumentar a velocidade dos olhos
```javascript
let distanciaEsquerda = 15; // Aumentar de 8 para 15
```

### Alterar as cores
```javascript
const cores = {
    pele: '#E8D4C4', // Tons mais claros
    // ... outras cores
};
```

### Adicionar animação contínua
```javascript
function draw() {
    // ... seu código
}
```

### Adicionar som ao movimento
```javascript
function mouseMoved() {
    // Tocar som
    redraw();
}
```

## 📱 Compatibilidade

- ✅ Chrome, Firefox, Safari, Edge (navegadores modernos)
- ✅ Desktop e Tablets
- ⚠️ Mobile com restrições (mouse pode não funcionar bem)

## 📚 Referências

- [P5.js Documentation](https://p5js.org/)
- [Trigonometria em P5.js](https://p5js.org/reference/#/p5/atan2)
- [Mona Lisa - Wikipedia](https://pt.wikipedia.org/wiki/Mona_Lisa)

## 📄 Licença

Projeto educacional para fins de aprendizado.

---

**Desenvolvido com P5.js** 🎨
