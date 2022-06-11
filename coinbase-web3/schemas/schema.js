// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
      title:'coins',
      name:'coins',
      type:'document',
      fields:[
        {
          title:"name",
          name:'name',
          type:'string',
        },
        {
          title:'symbol',
          name:'symbol',
          type:'string'
        },
        {
          title:'contractAddress',
          name:'ContractAddress',
          type:'string',
        },
        {
          title:'USD price',
          name:'usdPrice',
          type:'string',
        },
        {
          title:'logo',
          name:'logo',
          type:'image',
        },
      ],
    },
  ]),
})
