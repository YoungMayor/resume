const helpers = {
    copyText: (str) => {
        const el = document.createElement('textarea');
        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    },

    getMessageTypeIcon: (type) => {
        try {
            return {
                message: 'mdi-message-bulleted',
                info: 'mdi-information',
                complaint: 'mdi-account-alert',
                enquiry: 'mdi-head-question-outline',
                request: 'mdi-frequently-asked-questions',
                feedback: 'mdi-alert-circle-check',
                job: 'mdi-account-cash',

                all: 'mdi-comment-multiple',
                unread: 'mdi-new-box',
                read: 'mdi-email-newsletter',
                trash: 'mdi-trash-can-outline'
            }[type]
        } catch (err) {
            return 'mdi-home'
        }
    },

    put: (obj, path, val) => {

        /**
         * If the path is a string, convert it to an array
         * @param  {String|Array} path The path
         * @return {Array}             The path array
         */
        var stringToPath = function(path) {

            // If the path isn't a string, return it
            if (typeof path !== 'string') return path;

            // Create new array
            var output = [];

            // Split to an array with dot notation
            path.split('.').forEach(function(item, index) {

                // Split to an array with bracket notation
                item.split(/\[([^}]+)\]/g).forEach(function(key) {

                    // Push to the new array
                    if (key.length > 0) {
                        output.push(key);
                    }

                });

            });

            return output;

        };

        // Convert the path to an array if not already
        path = stringToPath(path);

        // Cache the path length and current spot in the object
        var length = path.length;
        var current = obj;

        // Loop through the path
        path.forEach(function(key, index) {

            // If this is the last item in the loop, assign the value
            if (index === length - 1) {
                current[key] = val;
            }

            // Otherwise, update the current place in the object
            else {

                // If the key doesn't exist, create it
                if (!current[key]) {
                    current[key] = {};
                }

                // Update the current place in the objet
                current = current[key];

            }

        });

    },

    createSEOMeta(data) {
        const { origin, href, pathname } = location
        const image = data.image || '/mayor-creatives.jpg'
        const path = data.path || pathname

        return [
            { hid: 'description', name: 'description', content: data.description },

            { hid: 'og:title', property: 'og:title', content: data.title },
            { hid: 'og:image', property: 'og:image', content: `${origin}${image}` },
            { hid: 'og:type', property: 'og:type', content: data.type || 'website' },
            {
                hid: 'og:description',
                property: 'og:description',
                content: data.description,
            },
            {
                hid: 'og:url',
                property: 'og:url',
                content: `${origin}${path}`,
            },
            {
                hid: 'twitter:card',
                name: 'twitter:card',
                content: data.cardType || 'summary_large_image',
            },
        ]
    },
}

export default ({}, inject) => {
    inject('helpers', helpers)
}