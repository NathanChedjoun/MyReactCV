import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import Diplome from './Diplome';
import Experience from './Experience';
import Appreciation from './Appreciation';
import Profil from './profil.jpg'

class App extends Component {

    render(){
        return (
            <Container id="App">
                <Row>
                    <Col sm="4">

                        {/* Photo de Profil */}
                        <div className="bloc">
                            <Card id="photo">
                                <CardImg top width="100%" src={Profil} />
                                <CardBody>
                                    <div className="nom">CHEDJOUN TCHOUANANG Nathanael</div>
                                    <div className="statut">Ingénieur Informaticien</div>
                                </CardBody>
                            </Card>
                        </div>

                        {/* Informations complémentaires */}
                        <div className="bloc">
                            <div>
                                <span className="bold">Date de naissance</span> <br/> 26/06/1995
                            </div>
                            <div>
                                <span className="bold">Residence</span> <br/> Yaoundé, Cameroun
                            </div>
                            <div>
                                <span className="bold">Nationalité</span> <br/> Camerounais
                            </div>
                            <div>
                                <span className="bold">Téléphone</span> <br/> (+237) 695316074
                            </div>
                            <div>
                                <span className="bold">adresse mail</span> <br/> nathanchedjoun@gmail.com
                            </div>
                        </div>

                        {/* Langues */}
                        <div className="bloc">
                            <div className="bold">Langues</div>
                            <Appreciation
                                description="Français"
                                valeur="80"
                            />
                            <Appreciation
                                description="Anglais"
                                valeur="60"
                            />
                        </div>

                        {/* Atouts */}
                        <div className="bloc">
                            <div className="bold">Atouts</div>
                            <Appreciation
                                description="Dynamisme"
                                valeur="90"
                            />
                            <Appreciation
                                description="Adaptabilité"
                                valeur="90"
                            />
                            <Appreciation
                                description="Organisation"
                                valeur="60"
                            />

                        </div>

                        {/* Centres d'intérêts */}
                        <div className="bloc">
                            <div className="bold">Centres d'intérêts</div>
                            <div>
                                <span>Basketball, Football</span> <br/>
                                <span>Musique</span>
                            </div>
                        </div>

                        {/* Compétences */}
                        <div className="bloc">
                            <div className="bold">Compétences</div>
                            <Appreciation
                                description="MySQL, PostGre SQL"
                                valeur="65"
                            />
                            <Appreciation
                                description="Excel VBA"
                                valeur="90"
                            />
                            <Appreciation
                                description="Java"
                                valeur="80"
                            />
                            <Appreciation
                                description="JEE, Spring"
                                valeur="70"
                            />
                            <Appreciation
                                description="Html5 & CSS3"
                                valeur="80"
                            />
                            <Appreciation
                                description="JavaScript"
                                valeur="80"
                            />
                            <Appreciation
                                description="React JS"
                                valeur="65"
                            />
                        </div>
                    </Col>

                    <Col sm="8">

                        {/* Profil */}
                        <div className="bloc">
                            <div className="titre">Mon Profil</div>
                            <div className="texte">Je suis passionné par les activités managériales, de gestion de projet et
                                d'entrepreneuriat. Déterminé, Je recherche au quotidien des moyens pour améliorer mes aptitudes
                                dans mes domaines d'activités tout en engrangeant au passage les atouts nécessairespour atteindre
                                mes objectifs.
                            </div>
                        </div>

                        {/* Diplomes */}
                        <div className="bloc">
                            <div className="titre">Diplomes et formations</div>
                            <Diplome
                                titre="Ingénieur de Conception option Génie Informatique"
                                ecole="Ecole Nationale Supérieure Polytechnique"
                                emplacement="Ydé"
                                duree="2012 - 2019"
                                description="Obtention du Diplôme d'Ingénieur de Conception option Génie Informatique"
                            />
                            <Diplome
                                titre="Baccalauréat C"
                                ecole="Lycée Bilingue de Mendong"
                                emplacement="Ydé"
                                duree="2005 - 2012"
                                description="Obtention du Baccalauréat Général Série C"
                            />
                        </div>

                        {/* Expériences professionnelles */}
                        <div className="bloc">
                            <div className="titre">Expériences professionnelles</div>
                            <Experience
                                titre="Prestataire de service"
                                societe="Kamix SAS"
                                emplacement="Paris-France"
                                duree="Septembre 2019 - Octobre 2019"
                                theme=" Développement d'une application Excel automatisant les calculs IFRS9 de plusieurs
                                autres fichiers Excel"
                                contact="Mr Justin Bienvenu LOCK BANG"
                                email="justin.lock@kamix.io"
                            />
                            <Experience
                                titre="Stagiaire"
                                societe="UFIPayment Solutions"
                                emplacement="Ydé-Cameroun"
                                duree="Février 2019 - Juillet 2019"
                                theme="Stage Ingénieur ayant pour thème : Mise en place d'une plateforme de dématérialisation
                                des processus de gouvernance d'une EMF"
                                contact="Mr TEUTSONG FONING David"
                                email="dfoning@ufipay.net"
                            />
                            <Experience
                                titre="Stagiaire"
                                societe="SCI-2M"
                                emplacement="Ydé-Cameroun"
                                duree="Juillet 2018 - Septembre 2018"
                                theme="Stage pré-Ingénieur ayant pour thème : Développement de Module Backend en Rest API
                                avec le Framework SPRING"
                                contact="Pr Edouard KOUAMOU"
                                email="georges.kouamou@gmail.com"
                            />
                            <Experience
                                titre="Data Admin"
                                societe="Intelligentsia Corporation"
                                emplacement="Ydé-Cameroun"
                                duree="2015 - 2018"
                                theme="Administration de la plateforme de gestion des clients (étudiants)"
                                contact="Mr William WAMBA"
                                email="wwillyclerk@gmail.com"
                            />
                            <Experience
                                titre="Logisticien"
                                societe="Intelligentsia Corporation"
                                emplacement="Ydé-Cameroun"
                                duree="2013 - 2015"
                                theme="Gestion de la chaîne d'approvisionnement de l'entreprise"
                                contact="Mr William WAMBA"
                                email="wwillyclerk@gmail.com"
                            />
                        </div>
                    </Col>
                </Row>

                <Row id="bordure"></Row>
            </Container>
        );
    }
}

export default App;
