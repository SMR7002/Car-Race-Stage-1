class Form {
    constructor(){

    }

    display(){
        var title = createElement('h2')
        title.html("Car Racing Game");
        title.position(125,20)

        var input = createInput("name")
        var button = createButton("Play")
        var greeting = createElement("h2")
        
        input.position(130,160)
        button.position(250,200)

        button.mousePressed(function(){
            input.hide();
            button.hide();
            
           var name = input.value() 
           playerCount = playerCount + 1
           player.updateCount(playerCount)
           greeting.html("Welcome Player")
           greeting.position(130,160)
        })
        
    }
}