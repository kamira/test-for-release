


export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    name: 'test',
    uiExports: {
      
      app: {
        title: 'Test',
        description: 'test',
        main: 'plugins/test/app'
      },
      
      
      
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    

  });
};
