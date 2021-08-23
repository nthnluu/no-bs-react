module.exports = {
    prompt: ({prompter}) => {
        function askName(name) {
            if (name) {
                return Promise.resolve({allow: true});
            } else {
                prompter.prompt({
                    type: 'input',
                    name: 'name',
                    message: `What's the name of your new component?`
                }).then(({name}) => askName(name));
            }
        }

        return prompter
            .prompt({
                type: 'input',
                name: 'name',
                message: "What's the name of your new component?"
            })
            .then(({name}) => askName(name));
    }
};