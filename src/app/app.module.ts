import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LocalNotifications } from '@ionic-native/local-notifications';

//telas de inicio e login
import { MyApp } from './app.component';
import { SplashScreenPage } from '../pages/splash-screen/splash-screen';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

//alertas
import { ConfirmacaoRecuperacaoSenhaPage } from '../pages/confirmacao-recuperacao-senha/confirmacao-recuperacao-senha';
import { AlertaInternetPage } from '../pages/alerta-internet/alerta-internet';
import { AlertRcNaoCadastradoPage } from '../pages/alert-rc-nao-cadastrado/alert-rc-nao-cadastrado';

//telas de cadastro
import { NivelContaRegistroPage } from '../pages/nivel-conta-registro/nivel-conta-registro';
import { RecuperacaoSenhaPage } from '../pages/recuperacao-senha/recuperacao-senha';
import { RegistroClientePage } from '../pages/registro-cliente/registro-cliente';
import { RegistroProfissionalPage } from '../pages/registro-profissional/registro-profissional';
import { ValidacaoRegistroNivelProfCadastroPage } from '../pages/validacao-registro-nivel-prof-cadastro/validacao-registro-nivel-prof-cadastro';

//telas profissional
import { ProfissionalPage } from '../pages/profissional/profissional';
import { PAgendaPage } from '../pages/p-agenda/p-agenda';
import { PClientesPage } from '../pages/p-clientes/p-clientes';
import { PDiarioPage } from '../pages/p-diario/p-diario';
import { PHistoricoPage } from '../pages/p-historico/p-historico';
import { PSessoesPage } from '../pages/p-sessoes/p-sessoes';
import { PSugestoesPage } from '../pages/p-sugestoes/p-sugestoes';
import { PPerfilPage } from '../pages/p-perfil/p-perfil';
import { PImagensSessaoPage } from '../pages/p-imagens-sessao/p-imagens-sessao';
import { PContatosPage } from '../pages/p-contatos/p-contatos';
import { PComunicadoPage } from '../pages/p-comunicado/p-comunicado';

//telas Administracao
import { AdminPage } from '../pages/admin/admin';
import { AAdicionardicaPage } from '../pages/a-adicionardica/a-adicionardica';
import { AIncluirrcPage } from '../pages/a-incluirrc/a-incluirrc';
import { AUsuariosPage } from '../pages/a-usuarios/a-usuarios';
import { AProfissionaisPage } from '../pages/a-profissionais/a-profissionais';
import { ARelatoriosPage } from '../pages/a-relatorios/a-relatorios';
import { ASorteiosPage } from '../pages/a-sorteios/a-sorteios';
import { ADicasPage } from '../pages/a-dicas/a-dicas';
import { ASugestoesPage } from '../pages/a-sugestoes/a-sugestoes';
import { AHistoricoSugestoesPage } from '../pages/a-historico-sugestoes/a-historico-sugestoes';

//telas usuario free
import { UsuarioPage } from '../pages/usuario/usuario';
import { MetodoPage } from '../pages/metodo/metodo';
import { LocalizarProfissionalPage } from '../pages/localizar-profissional/localizar-profissional';
import { DicasUsuarioFreePage } from '../pages/dicas-usuario-free/dicas-usuario-free';
import { PerfilProfissionalPage } from '../pages/perfil-profissional/perfil-profissional';

//telas Usuario em tratamento
import { UHomePage } from '../pages/u-home/u-home';
import { UDiarioPage } from '../pages/u-diario/u-diario';
import { UDicasPage } from '../pages/u-dicas/u-dicas';
import { UPerfilPage } from '../pages/u-perfil/u-perfil';
import { UEvolucaoPage } from '../pages/u-evolucao/u-evolucao';

//funcionalidades importadas
import { HttpModule } from '@angular/http';

//providers
import { LoginProvider } from '../providers/login/login';
import { RcProvider } from '../providers/rc/rc';

//Teste histórico de saúde - SAUDE
import { SaudePg1Page } from '../pages/saude-pg1/saude-pg1';
import { SaudePg2Page } from '../pages/saude-pg2/saude-pg2';
import { SaudePg3Page } from '../pages/saude-pg3/saude-pg3';
import { SaudePg4Page } from '../pages/saude-pg4/saude-pg4';
import { SaudePg5Page } from '../pages/saude-pg5/saude-pg5';
import { SaudePg6Page } from '../pages/saude-pg6/saude-pg6';
import { SaudePg7Page } from '../pages/saude-pg7/saude-pg7';
import { SaudePg8Page } from '../pages/saude-pg8/saude-pg8';
import { SaudePg9Page } from '../pages/saude-pg9/saude-pg9';
import { SaudePg10Page } from '../pages/saude-pg10/saude-pg10';
import { SaudePg11Page } from '../pages/saude-pg11/saude-pg11';
import { SaudePg12Page } from '../pages/saude-pg12/saude-pg12';
import { SaudePg13Page } from '../pages/saude-pg13/saude-pg13';

//Avaliacao de sedentarismo - SE
import { SeInicioPage } from '../pages/se-inicio/se-inicio';
import { SeAtividadesdomesticasPage } from '../pages/se-atividadesdomesticas/se-atividadesdomesticas';
import { SeCaminhaPage } from '../pages/se-caminha/se-caminha';
import { SeCaminhadaPage } from '../pages/se-caminhada/se-caminhada';
import { SeDuracaoesportePage } from '../pages/se-duracaoesporte/se-duracaoesporte';
import { SeEnergiaPage } from '../pages/se-energia/se-energia';
import { SeEsportePage } from '../pages/se-esporte/se-esporte';
import { SeResultadoPage } from '../pages/se-resultado/se-resultado';
import { SeSentadoPage } from '../pages/se-sentado/se-sentado';
import { SeTelevisaoPage } from '../pages/se-televisao/se-televisao';
import { SeTrabalhoPage } from '../pages/se-trabalho/se-trabalho';
import { SeTresandaresPage } from '../pages/se-tresandares/se-tresandares';

//Avaliacao corporal - AC
import { AcInicioPage } from '../pages/ac-inicio/ac-inicio';
import { AcAbdomenPage } from '../pages/ac-abdomen/ac-abdomen';
import { AcBracoPage } from '../pages/ac-braco/ac-braco';
import { AcBustoPage } from '../pages/ac-busto/ac-busto';
import { AcCinturaPage } from '../pages/ac-cintura/ac-cintura';
import { AcConcluidoPage } from '../pages/ac-concluido/ac-concluido';
import { AcCoxaPage } from '../pages/ac-coxa/ac-coxa';
import { AcEdemaPage } from '../pages/ac-edema/ac-edema';
import { AcEstriasPage } from '../pages/ac-estrias/ac-estrias';
import { AcFlacidezPage } from '../pages/ac-flacidez/ac-flacidez';
import { AcHldgPage } from '../pages/ac-hldg/ac-hldg';
import { AcImcPage } from '../pages/ac-imc/ac-imc';
import { AcLipodistrofiaPage } from '../pages/ac-lipodistrofia/ac-lipodistrofia';
import { AcPanturilhaPage } from '../pages/ac-panturilha/ac-panturilha';
import { AcPosturaisPage } from '../pages/ac-posturais/ac-posturais';
import { AcQuadrilPage } from '../pages/ac-quadril/ac-quadril';
import { AcResultadoImcPage } from '../pages/ac-resultado-imc/ac-resultado-imc';

//Diario da vida Saudavel
import { DiarioAguaPage } from '../pages/diario-agua/diario-agua';
import { DiarioAlimentacaoPage } from '../pages/diario-alimentacao/diario-alimentacao';
import { DiarioCigarroPage } from '../pages/diario-cigarro/diario-cigarro';
import { DiarioDiaPage } from '../pages/diario-dia/diario-dia';
import { DiarioFisicoPage } from '../pages/diario-fisico/diario-fisico';
import { DiarioNutricaoPage } from '../pages/diario-nutricao/diario-nutricao';
import { DiarioRdPage } from '../pages/diario-rd/diario-rd';
import { DiarioSonoPage } from '../pages/diario-sono/diario-sono';
import { DiarioConcluidoPage } from '../pages/diario-concluido/diario-concluido';

import { DicaProvider } from '../providers/dica/dica';
import { LocalizacaoProvider } from '../providers/localizacao/localizacao';
import { MensagemPage } from '../pages/mensagem/mensagem';
import { AgendaPage } from '../pages/agenda/agenda';
import { ImagemSessaoPage } from '../pages/imagem-sessao/imagem-sessao';
import { IniciarTratamentoPage } from '../pages/iniciar-tratamento/iniciar-tratamento';
import { ChartsProvider } from '../providers/charts/charts';
import { IonicStorageModule } from '@ionic/storage';

import { Network } from '@ionic-native/network';



@NgModule({
  declarations: [
    MyApp,
    ConfirmacaoRecuperacaoSenhaPage,
    HomePage,
    LoginPage,
    NivelContaRegistroPage,
    RecuperacaoSenhaPage,
    RegistroClientePage,
    RegistroProfissionalPage,
    ValidacaoRegistroNivelProfCadastroPage,
    SplashScreenPage,
    UsuarioPage,
    AdminPage,
    AlertaInternetPage,
    MensagemPage,
    MetodoPage,

    PComunicadoPage,
    ProfissionalPage,
    PAgendaPage,
    PClientesPage,
    PDiarioPage,
    PHistoricoPage,
    PSessoesPage,
    PSugestoesPage,
    PPerfilPage,
    PImagensSessaoPage,
    PContatosPage,
    AcResultadoImcPage,

    AAdicionardicaPage,
    AIncluirrcPage,
    AUsuariosPage,
    AProfissionaisPage,
    ARelatoriosPage,
    ASorteiosPage,
    ADicasPage,
    ASugestoesPage,
    AHistoricoSugestoesPage,

    UHomePage,
    UDiarioPage,
    UDicasPage,
    UPerfilPage,
    UEvolucaoPage,
    LocalizarProfissionalPage,
    DicasUsuarioFreePage,
    AlertRcNaoCadastradoPage,

    SaudePg1Page,
    SaudePg2Page,
    SaudePg3Page,
    SaudePg4Page,
    SaudePg5Page,
    SaudePg6Page,
    SaudePg7Page,
    SaudePg8Page,
    SaudePg9Page,
    SaudePg10Page,
    SaudePg11Page,
    SaudePg12Page,
    SaudePg13Page,

    SeInicioPage,
    SeAtividadesdomesticasPage,
    SeCaminhaPage,
    SeCaminhadaPage,
    SeDuracaoesportePage,
    SeEnergiaPage,
    SeEsportePage,
    SeResultadoPage,
    SeSentadoPage,
    SeTelevisaoPage,
    SeTrabalhoPage,
    SeTresandaresPage,

    AcInicioPage,
    AcAbdomenPage,
    AcBracoPage,
    AcBustoPage,
    AcCinturaPage,
    AcConcluidoPage,
    AcCoxaPage,
    AcEdemaPage,
    AcEstriasPage,
    AcFlacidezPage,
    AcHldgPage,
    AcImcPage,
    AcLipodistrofiaPage,
    AcPanturilhaPage,
    AcPosturaisPage,
    AcQuadrilPage,

    DiarioAguaPage,
    DiarioAlimentacaoPage,
    DiarioCigarroPage,
    DiarioDiaPage,
    DiarioFisicoPage,
    DiarioNutricaoPage,
    DiarioRdPage,
    DiarioSonoPage,
    DiarioConcluidoPage,

    PerfilProfissionalPage,
    AgendaPage,
    ImagemSessaoPage,
    IniciarTratamentoPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ConfirmacaoRecuperacaoSenhaPage,
    HomePage,
    LoginPage,
    NivelContaRegistroPage,
    RecuperacaoSenhaPage,
    RegistroClientePage,
    RegistroProfissionalPage,
    ValidacaoRegistroNivelProfCadastroPage,
    SplashScreenPage,
    AlertaInternetPage,
    LocalizarProfissionalPage,
    AlertRcNaoCadastradoPage,

//admin
    AdminPage,
    AAdicionardicaPage,
    AIncluirrcPage,
    AUsuariosPage,
    AProfissionaisPage,
    ARelatoriosPage,
    ASorteiosPage,
    ADicasPage,
    ASugestoesPage,
    AHistoricoSugestoesPage,
//usuario
    UHomePage,
    UDiarioPage,
    UDicasPage,
    UPerfilPage,
    DicasUsuarioFreePage,
    MetodoPage,
    UsuarioPage,
    MensagemPage,
    UEvolucaoPage,
//profissional
    PComunicadoPage,
    ProfissionalPage,
    PAgendaPage,
    PClientesPage,
    PDiarioPage,
    PHistoricoPage,
    PSessoesPage,
    PSugestoesPage,
    PPerfilPage,
    PImagensSessaoPage,
    PContatosPage,
    AcResultadoImcPage,

    SaudePg1Page,
    SaudePg2Page,
    SaudePg3Page,
    SaudePg4Page,
    SaudePg5Page,
    SaudePg6Page,
    SaudePg7Page,
    SaudePg8Page,
    SaudePg9Page,
    SaudePg10Page,
    SaudePg11Page,
    SaudePg12Page,
    SaudePg13Page,

    SeInicioPage,
    SeAtividadesdomesticasPage,
    SeCaminhaPage,
    SeCaminhadaPage,
    SeDuracaoesportePage,
    SeEnergiaPage,
    SeEsportePage,
    SeResultadoPage,
    SeSentadoPage,
    SeTelevisaoPage,
    SeTrabalhoPage,
    SeTresandaresPage,

    AcInicioPage,
    AcAbdomenPage,
    AcBracoPage,
    AcBustoPage,
    AcCinturaPage,
    AcConcluidoPage,
    AcCoxaPage,
    AcEdemaPage,
    AcEstriasPage,
    AcFlacidezPage,
    AcHldgPage,
    AcImcPage,
    AcLipodistrofiaPage,
    AcPanturilhaPage,
    AcPosturaisPage,
    AcQuadrilPage,

    DiarioAguaPage,
    DiarioAlimentacaoPage,
    DiarioCigarroPage,
    DiarioDiaPage,
    DiarioFisicoPage,
    DiarioNutricaoPage,
    DiarioRdPage,
    DiarioSonoPage,
    DiarioConcluidoPage,

    PerfilProfissionalPage,
    AgendaPage,
    ImagemSessaoPage,
    IniciarTratamentoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    RcProvider,
    DicaProvider,
    LocalizacaoProvider,
    LocalNotifications,
    ChartsProvider,
    Network
  ]
})
export class AppModule {}
