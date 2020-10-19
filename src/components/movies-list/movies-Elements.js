import React, { Component } from 'react';


export default class MoviesElements extends Component{
    render(){
        return (
            <div className="w-25 p-2">
            <div className="card">
                <img src="" alt="img-gladiator" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">Gladiator</h5>
                    <p className="card-text">SYNOPSIS ET DÉTAILS
Le général romain Maximus est le plus fidèle soutien de l'empereur Marc Aurèle, qu'il a conduit de victoire en victoire avec une bravoure et un dévouement exemplaires. Jaloux du prestige de Maximus, et plus encore de l'amour que lui voue l'empereur, le fils de MarcAurèle, Commode, s'arroge brutalement le pouvoir, puis ordonne l'arrestation du général et son exécution. Maximus échappe à ses assassins mais ne peut empêcher le massacre de sa famille. Capturé par un marchand d'esclaves, il devient gladiateur et prépare sa vengeance.
Distributeur United International Pictures (UIP)
                    </p>
                </div>
            </div>
            </div>
        );
    }
}
