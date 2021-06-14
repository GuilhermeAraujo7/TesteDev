using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CRUDAPI.Models {
    public class Cliente {
        public int Id { get; set; }

        public string Nome { get; set; }

        public string Cpf { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd-MM-yyyy}", ApplyFormatInEditMode = true)]

        public DateTime DataNasc { get; set; }
    }
}