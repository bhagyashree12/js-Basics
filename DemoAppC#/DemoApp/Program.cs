using System;
using System.Collections.Generic;
using System.Globalization;

namespace DemoApp


{

    class NewSingerClass
    {
        public string Name { get; set; }
        public string song { get; set; }

        public void showName()
        {
            Console.WriteLine("hello bhagyahsree");
        }
    }
    class Program
    {
        static void Main(string[] args)


        {
            //take input and display output
            Console.WriteLine("Enter your name");
            String name = Console.ReadLine();
            Console.WriteLine("Your name is " + name);


            //taking array input and displaying using forLoop
            Console.WriteLine("Enter your favourite singers");
            string[] singers = new string[4];
            for (int i = 0; i < singers.Length; i++)
            {
                singers[i] = Console.ReadLine();
            }

            Console.WriteLine("Your favourite singers are");
            foreach (string value in singers)
            {
                Console.WriteLine(value);
            }


            //using dynamic list 
            Console.WriteLine("Enter number of your favourite singers");
            List<string> singerList = new List<string>();
            int count = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter your favourite singers");
            for (int i = 0; i < count; i++)
            {
                String singerName = Console.ReadLine();
                singerList.Add(singerName);

            }
            Console.WriteLine("Your favourite singers are");
            foreach (string value in singerList)
            {
                Console.WriteLine(value);
            }

            //using class objects
            NewSingerClass newSinger = new NewSingerClass { Name = "Queen", song = "Killer Queen" };
            Console.WriteLine($"New Singer class  { newSinger.Name}");










        }
    }
}
