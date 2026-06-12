// Cores da Mona Lisa baseadas na paleta histórica
const cores = {
    pele: '#D4A574',
    pelaClara: '#E8C9B0',
    pelaEscura: '#A0825A',
    fundoEsquerdo: '#8B7355',
    fundoDireito: '#6B5D4F',
    cabelo: '#3D2817',
    olho: '#5C4033',
    pupila: '#1A0F0A',
    brancoDosOlhos: '#FFF8DC',
    boca: '#C97A7A',
    sobrancelha: '#4A3728'
};

let canvas;
let largura = 600;
let altura = 750;

function setup() {
    canvas = createCanvas(largura, altura);
    canvas.parent('p5-container');
    noLoop();
}

function draw() {
    // Fundo com gradiente
    desenharFundo();
    
    // Corpo e roupas
    desenharCorpo();
    
    // Rosto
    desenharRosto();
    
    // Cabelo
    desenharCabelo();
    
    // Olhos (acompanham o mouse)
    desenharOlhos();
    
    // Nariz
    desenharNariz();
    
    // Boca (sorriso misterioso)
    desenharBoca();
    
    // Detalhes finais
    desenharDetalhes();
}

function desenharFundo() {
    // Lado esquerdo (mais escuro)
    fill(cores.fundoEsquerdo);
    rect(0, 0, largura / 2, altura);
    
    // Lado direito (um pouco mais claro)
    fill(cores.fundoDireito);
    rect(largura / 2, 0, largura / 2, altura);
    
    // Transição suave entre os lados
    for (let i = 0; i < 50; i++) {
        let alpha = map(i, 0, 50, 100, 0);
        fill(139, 115, 85, alpha);
        rect(largura / 2 - i / 2, 0, 1, altura);
    }
}

function desenharCorpo() {
    push();
    noStroke();
    
    // Vestido (tons de marrom e ocre)
    fill('#8B6F47');
    beginShape();
    vertex(largura / 2 - 150, 350);
    vertex(largura / 2 - 180, 450);
    vertex(largura / 2 - 160, altura);
    vertex(largura / 2 + 160, altura);
    vertex(largura / 2 + 180, 450);
    vertex(largura / 2 + 150, 350);
    endShape(CLOSE);
    
    // Detalhes do vestido
    stroke('#5C3D2E');
    strokeWeight(2);
    line(largura / 2 - 150, 350, largura / 2 - 160, altura);
    line(largura / 2 + 150, 350, largura / 2 + 160, altura);
    
    pop();
}

function desenharRosto() {
    push();
    noStroke();
    
    // Rosto principal (oval)
    fill(cores.pele);
    ellipse(largura / 2, 220, 200, 260);
    
    // Sombreamento do rosto (lado esquerdo mais escuro)
    fill(cores.pelaEscura);
    beginShape();
    vertex(largura / 2 - 100, 150);
    vertex(largura / 2 - 120, 200);
    vertex(largura / 2 - 110, 300);
    vertex(largura / 2 - 80, 280);
    vertex(largura / 2 - 90, 180);
    endShape(CLOSE);
    
    // Realce do lado direito
    fill(cores.pelaClara);
    beginShape();
    vertex(largura / 2 + 80, 180);
    vertex(largura / 2 + 90, 160);
    vertex(largura / 2 + 100, 240);
    vertex(largura / 2 + 90, 280);
    vertex(largura / 2 + 60, 260);
    endShape(CLOSE);
    
    pop();
}

function desenharCabelo() {
    push();
    noStroke();
    fill(cores.cabelo);
    
    // Cabelo volumoso
    ellipse(largura / 2, 130, 220, 150);
    
    // Detalhes do cabelo com mechas
    fill(cores.pelaEscura);
    arc(largura / 2 - 100, 120, 80, 100, PI, PI + PI / 2);
    arc(largura / 2 + 100, 120, 80, 100, PI / 2, PI);
    
    pop();
}

function desenharOlhos() {
    push();
    noStroke();
    
    // Posição dos olhos
    let olhoEsquerdoX = largura / 2 - 50;
    let olhoEsquerdoY = 200;
    let olhoDireitoX = largura / 2 + 50;
    let olhoDireitoY = 200;
    
    // Desenhar branco dos olhos
    fill(cores.brancoDosOlhos);
    ellipse(olhoEsquerdoX, olhoEsquerdoY, 35, 45);
    ellipse(olhoDireitoX, olhoDireitoY, 35, 45);
    
    // Sobrancelhas
    stroke(cores.sobrancelha);
    strokeWeight(4);
    noFill();
    arc(olhoEsquerdoX, olhoEsquerdoY - 25, 40, 20, PI, 0);
    arc(olhoDireitoX, olhoDireitoY - 25, 40, 20, PI, 0);
    
    // Íris
    noStroke();
    fill(cores.olho);
    
    // Calcular ângulo e distância em relação ao mouse
    let anguloEsquerdo = atan2(mouseY - olhoEsquerdoY, mouseX - olhoEsquerdoX);
    let distanciaEsquerda = 8;
    let pupilaEsquerdaX = olhoEsquerdoX + cos(anguloEsquerdo) * distanciaEsquerda;
    let pupilaEsquerdaY = olhoEsquerdoY + sin(anguloEsquerdo) * distanciaEsquerda;
    
    ellipse(pupilaEsquerdaX, pupilaEsquerdaY, 25, 32);
    
    // Pupila direita segue o mouse
    let anguloDireito = atan2(mouseY - olhoDireitoY, mouseX - olhoDireitoX);
    let distanciaDireita = 8;
    let pupilaDireitaX = olhoDireitoX + cos(anguloDireito) * distanciaDireita;
    let pupilaDireitaY = olhoDireitoY + sin(anguloDireito) * distanciaDireita;
    
    ellipse(pupilaDireitaX, pupilaDireitaY, 25, 32);
    
    // Pupila (mais escura)
    fill(cores.pupila);
    ellipse(pupilaEsquerdaX, pupilaEsquerdaY, 12, 16);
    ellipse(pupilaDireitaX, pupilaDireitaY, 12, 16);
    
    // Brilho nos olhos
    fill(255);
    ellipse(pupilaEsquerdaX - 4, pupilaEsquerdaY - 4, 5);
    ellipse(pupilaDireitaX - 4, pupilaDireitaY - 4, 5);
    
    pop();
}

function desenharNariz() {
    push();
    stroke(cores.pelaEscura);
    strokeWeight(2);
    noFill();
    
    // Nariz em perspectiva
    line(largura / 2, 200, largura / 2, 260);
    line(largura / 2, 260, largura / 2 - 15, 270);
    line(largura / 2, 260, largura / 2 + 10, 270);
    
    pop();
}

function desenharBoca() {
    push();
    stroke(cores.boca);
    strokeWeight(3);
    noFill();
    
    // Sorriso misterioso (parábola)
    beginShape();
    for (let i = -40; i <= 40; i += 2) {
        let x = largura / 2 + i;
        let y = 310 - (i * i) / 200; // Parábola para sorriso
        vertex(x, y);
    }
    endShape();
    
    // Detalhe no centro da boca
    stroke(cores.boca);
    line(largura / 2 - 30, 310, largura / 2 + 30, 310);
    
    pop();
}

function desenharDetalhes() {
    push();
    stroke(cores.pelaEscura);
    strokeWeight(1);
    
    // Pequenas linhas de expressão ao redor dos olhos
    line(largura / 2 - 70, 200, largura / 2 - 90, 195);
    line(largura / 2 + 70, 200, largura / 2 + 90, 195);
    
    // Marcas de rugas ao redor da boca
    line(largura / 2 - 60, 320, largura / 2 - 80, 325);
    line(largura / 2 + 60, 320, largura / 2 + 80, 325);
    
    pop();
}

// Atualizar desenho quando o mouse se move
function mouseMoved() {
    redraw();
}

// Manter o canvas responsivo
function windowResized() {
    // Opcional: adaptar tamanho do canvas ao redimensionar a janela
}