---
layout: mydefault
---
<ul class="pagination">
  {% for element in site.periodic_table_elements %}
    {% if element <> page %}
    <li>
        <a href="{{ element.url | relative_url}}">
            {{ element.atomic_number }} {{ element.symbol }}
        </a>
    </li>
    {% else %}
    <li>
        <a style="border-color: transparent; color: red;">{{ element.atomic_number }} {{ element.symbol }}</a>
    </li>
    {% endif %}
  {% endfor %}
</ul>

<div  style="background-color: #{{ page.color }}; padding: 0 2px 0 5px;">
<a class="pagination" style="float: right;" href=" {{ '/periodic_table_elements.html' | relative_url }}" >Elements</a>
<h1>{{ page.atomic_name | capitalize | append: ' ( ' | append: page.symbol | append: ' )'}}</h1>

{% assign kelvin_unit = " K" %}
{% assign density_unit = " g/L" %}
{% assign heat_unit = " kJ/mol" %}
{% assign heat_capacity_unit = " kJ/(mol·K)" %}
{% assign pauling = "Pauling scale: " %}
{% assign radius_unit = " pm (1×10<sup>−12</sup> m)" %}
{% assign thermal_conductivity_unit = "W/(m·K)" %}
{% assign speed_of_voice_unit = "m/s" %}

<ul class="b8t_list">
    <li>
    Atomic number: {{ page.atomic_number }}
    </li>
    <li>
    Appearance: {{ page.appearance }}
    </li>
    <li>
    Standard atomic weight: {{ page.saw }}
    </li>
    <li>
    Group:  {{ page.group }}
    </li>
    <li>
    Period:  {{ page.period }}
    </li>
    <li>
    Electron configuration: 
       {% assign i = page.shell_nr | minus: 1 %}
       {% for index in (0..i) %}
             {{ page.shell_pos[index] }}{{ page.blocks[index] }}<sup>{{ page.electrons[index] }}</sup>
        {% endfor %}
    </li>
    <li>
    Element category:  {{ page.element_category }}
    </li>
    <li>
    Melting point:  {{ page.melting_point | append: kelvin_unit }}
    </li>
    <li>
    Boiling point:  {{ page.boiling_point | append: kelvin_unit }}
    </li>
    <em>Standard Temperature ( 273.15{{ kelvin }} ) and Pressure ( 1 bar = 10<sup>5</sup> Pa )</em> 
    <li>
    Phase at STP:
        {% if page.stp_phase == "gas" %}
            ( {{ page.symbol }}<sub>{{ page.atom_in_molecule }}</sub> )
        {% endif %}
        {{ page.stp_phase }} 
    </li>
    <li>
    Density at STP:
        {% if page.stp_phase == "gas" %}
            ( {{ page.symbol }}<sub>{{ page.atom_in_molecule }}</sub> )
        {% endif %}
        {{ page.stp_density | append: density_unit }}
    </li>
    <li>
    Heat of fusion:
        {% if page.stp_phase == "gas" %}
            ( {{ page.symbol }}<sub>{{ page.atom_in_molecule }}</sub> )
        {% endif %}
        {{ page.heat_of_fusion }}{{ heat_unit }}
    </li>
    <li>
    Heat of vaporization:
        {% if page.stp_phase == "gas" %}
            ( {{ page.symbol }}<sub>{{ page.atom_in_molecule }}</sub> )
        {% endif %}
        {{ page.heat_of_vaporization }}{{ heat_unit }}
    </li>
    <li>
    Molar heat capacity:
        {% if page.stp_phase == "gas" %}
            ( {{ page.symbol }}<sub>{{ page.atom_in_molecule }}</sub> )
        {% endif %}
        {{ page.molar_heat_capacity }}{{ heat_capacity_unit }}
    </li>
    <li>
    Oxidation states:  {{ page.oxidation_states }}
    </li>
    <li>
    Electronegativity:  {{ pauling }}{{ page.electronegativity }}
    </li>
    <li>
    Covalent radius:  {{ page.covalent_r }}{{ radius_unit }}
    </li>
    <li>
    Van der Waals radius:  {{ page.waals_r }}{{ radius_unit }}
    </li>
    <li>
    Crystal structure:  {{ page.crystal_structure }}
    </li>
    <li>
    Speed of sound:  {{ page.speed_of_sound}}{{ speed_of_voice_unit }} ({{ page.condition_speed_of_sounds }})
    </li>
    <li>
    Thermal conductivity:  {{ page.thermal_conductivity }}{{ thermal_conductivity_unit }}
    </li>
</ul>
</div>

{{ content }}


