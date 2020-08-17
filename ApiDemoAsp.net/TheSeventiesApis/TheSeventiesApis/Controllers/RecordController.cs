using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Routing;
using TheSeventiesApis.Models;

namespace TheSeventiesApis.Controllers
{
    public class RecordController : ApiController

    {

        List<Record> recordList = new List<Record>();

        public RecordController()
        {
            recordList.Add(new Record { Id = 1, Singer = "Elton john", Song = "Your Song" });
            recordList.Add(new Record { Id = 2, Singer = "Elton john", Song = "Goodbye Yellow Brick Road" });
            recordList.Add(new Record { Id = 3, Singer = "Elton john", Song = "Rocket Man (I Think It's Going to Be a Long, Long Time)" });
            recordList.Add(new Record { Id = 4, Singer = "Elton john", Song = "Bennie and the Jets" });
            recordList.Add(new Record { Id = 5, Singer = "Elton john", Song = "Crocodile Rock" });
            recordList.Add(new Record { Id = 7, Singer = "Queen", Song = "Bohemian Rhapsody" });
            recordList.Add(new Record { Id = 8, Singer = "Queen", Song = "Killer Queen" });
            recordList.Add(new Record { Id = 9, Singer = "Queen", Song = "We Are the Champions" });
            recordList.Add(new Record { Id = 10, Singer = "Queen", Song = "Another One Bites the Dust" });
        }



        // GET: api/Record
        public List<Record> Get()
        {
            return recordList;
        }

        // GET: api/Record/5
        public Record Get(int id)
        {
            return recordList.Where((recordSearched)=> recordSearched.Id==id).FirstOrDefault();
        }

       


        //custom api
        [Route("api/Record/{singerName}")]
        [HttpGet]
        public Record GetUsingSingerName(string singerName)
        {
            return  recordList.Where((recordSearched) => recordSearched.Singer == singerName).FirstOrDefault(); ;
        }

        // POST: api/Record
        public void Post(Record record)
        {
            recordList.Add(record);
        }

       

        // DELETE: api/Record/5
        public void Delete(int id)
        {
        }
    }
}
